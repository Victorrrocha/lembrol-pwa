import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useContext, useEffect, useState } from "react";
import TodoContext from "../Context/todo-context";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uid } from "uuid";
import { CONSTANTS } from "../helpers/constants";

const NewTodo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const editMode = !!id;
    const context = useContext(TodoContext);

    const [values, setValues] = useState({
        id: uid(),
        title: "",
        status: false,
        importance: CONSTANTS.NOT_IMPORTANT,
        scheduled_date: dayjs(),
        begins_at: dayjs(),
        ends_at: dayjs(),
        time_before: "",
        time_after: "",
    });

    const [isImportant, setIsImportant] = useState(false);
    const [isUrgent, setIsUrgent] = useState(false);

    useEffect(() => {
        if (editMode) {
            setValues(context.getTodoById(id));
        }
        updateImportance();
    }, [editMode, id, setValues, context]);

    const handleValueChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleDateChange = (newValue) => {
        setValues({ ...values, scheduled_date: newValue });
    };

    const handleStartTimeChange = (newValue) => {
        setValues({ ...values, begins_at: newValue, ends_at: newValue });
    };

    const handleEndTimeChange = (newValue) => {
        setValues({ ...values, ends_at: newValue });
    };

    const handleImportanceChange = () => {
        setIsImportant((prev) => {
            updateImportance(!prev, isUrgent);
            return !prev;
        });
    };

    const handleUrgencyChange = () => {
        setIsUrgent((prev) => {
            updateImportance(isImportant, !prev);
            return !prev;
        });
    };

    function updateImportance(important, urgent) {
        if (important) {
            if (urgent) {
                setValues((prev) => {
                    return {
                        ...prev,
                        importance: CONSTANTS.URGENT_AND_IMPORTANT,
                    };
                });
            } else {
                setValues((prev) => {
                    return {
                        ...prev,
                        importance: CONSTANTS.COULD_BE_RESCHEDULED,
                    };
                });
            }
        } else {
            if (urgent) {
                setValues((prev) => {
                    return {
                        ...prev,
                        importance: CONSTANTS.COULD_BE_DELEGATED,
                    };
                });
            } else {
                setValues((prev) => {
                    return { ...prev, importance: CONSTANTS.NOT_IMPORTANT };
                });
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();
        updateImportance();
        editMode ? context.editTodo(values) : context.addNewTodo(values);
        navigate("/");
    };

    return (
        <Box sx={{ height: "100%" }}>
            <Box>
                <Typography variant="h5" component="h1">
                    Nova atividade
                </Typography>
            </Box>
            <Grid
                sx={{ height: "fit-content" }}
                container
                alignItems="center"
                direction="column"
            >
                <TextField
                    item
                    fullWidth
                    name="title"
                    value={values.title}
                    onChange={handleValueChange}
                    id="title"
                    label="Título"
                    variant="outlined"
                    sx={{ m: "1rem 0" }}
                />
                <LocalizationProvider item dateAdapter={AdapterDayjs}>
                    <Stack spacing={2} sx={{ width: "100%", mb: "1rem" }}>
                        <MobileDatePicker
                            item
                            label="Data"
                            inputFormat="DD/MM/YYYY"
                            value={values.scheduled_date}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <Grid container justifyContent="space-between">
                            <Box sx={{ width: "45%" }}>
                                <TimePicker
                                    InputProps={{ width: "50%" }}
                                    item
                                    label="Início"
                                    value={values.begins_at}
                                    onChange={handleStartTimeChange}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </Box>
                            <Box sx={{ width: "45%" }}>
                                <TimePicker
                                    InputProps={{ width: "50%" }}
                                    item
                                    label="Fim"
                                    value={values.ends_at}
                                    onChange={handleEndTimeChange}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </Box>
                        </Grid>
                    </Stack>
                </LocalizationProvider>
                <Grid container>
                    <Grid container xs={6} item sx={{ mb: "1rem" }}>
                        <FormControl item sx={{ width: "100%" }}>
                            <FormLabel
                                id="time_before"
                                sx={{ fontWeight: "700", color: "#000" }}
                            >
                                Tempo Pré Atividade
                            </FormLabel>
                            <RadioGroup
                                row
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "start",
                                    ml: 1,
                                }}
                                aria-labelledby="time_before"
                                name="time_before"
                                value={values.time_before}
                                onChange={handleValueChange}
                            >
                                <FormControlLabel
                                    value="0"
                                    control={<Radio />}
                                    label="Nenhum"
                                />
                                <FormControlLabel
                                    value="15"
                                    control={<Radio />}
                                    label="15 min"
                                />
                                <FormControlLabel
                                    value="30"
                                    control={<Radio />}
                                    label="30 min"
                                />
                                <FormControlLabel
                                    value="45"
                                    control={<Radio />}
                                    label="45min"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid container item xs={6}>
                        <FormControl item sx={{ width: "100%" }}>
                            <FormLabel
                                id="time_after"
                                sx={{ fontWeight: "700", color: "#000" }}
                            >
                                Tempo Pós Atividade
                            </FormLabel>
                            <RadioGroup
                                row
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "start",
                                    pl: 1,
                                }}
                                aria-labelledby="time_after"
                                name="time_after"
                                value={values.time_after}
                                onChange={handleValueChange}
                            >
                                <FormControlLabel
                                    value="0"
                                    control={<Radio />}
                                    label="Nenhum"
                                />
                                <FormControlLabel
                                    value="15"
                                    control={<Radio />}
                                    label="15 min"
                                />
                                <FormControlLabel
                                    value="30"
                                    control={<Radio />}
                                    label="30 min"
                                />
                                <FormControlLabel
                                    value="45"
                                    control={<Radio />}
                                    label="45min"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>

                <Box>
                    <FormGroup>
                        <FormControlLabel
                            sx={{ flexDirection: "row-reverse" }}
                            control={
                                <Switch
                                    onChange={handleImportanceChange}
                                    value={isImportant}
                                />
                            }
                            label="Importante?"
                        />
                        <FormControlLabel
                            sx={{ flexDirection: "row-reverse" }}
                            control={
                                <Switch
                                    onChange={handleUrgencyChange}
                                    value={isUrgent}
                                />
                            }
                            label="Urgente?"
                        />
                    </FormGroup>
                </Box>
                <Button item onClick={submit}>
                    {editMode ? "Atualizar" : "Adicionar"}
                </Button>
            </Grid>
        </Box>
    );
};

export default NewTodo;
