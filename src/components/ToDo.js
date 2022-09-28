import {
    Box,
    Grid,
    Checkbox,
    FormControlLabel,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import TodoContext from "../Context/todo-context";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../helpers/constants";
import { height } from "@mui/system";

const ToDo = ({ todo }) => {
    const navigate = useNavigate();
    const context = useContext(TodoContext);
    const { id, title, begins_at, ends_at, status } = todo;
    const [done, setDone] = useState(!!status);
    const from = `${begins_at?.hour()}:${begins_at?.minute()}`;
    const to = `${ends_at?.hour()}:${ends_at?.minute()}`;

    const editHandle = () => {
        navigate(`edit/${id}`);
    };

    const deleteHandle = (e) => {
        e.preventDefault();
        context.deleteTodo(id);
    };

    let titleStyle = {
        wordWrap: "break-word",
        maxHeight: "4.5rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "1.5rem",
    };

    let titleCheckedStyle = {
        wordWrap: "break-word",
        maxHeight: "4.5rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "1.5rem",
        textDecorationLine: "line-through",
        color: "#c3c3c3",
    };

    const doneTodo = {
        textDecorationLine: "line-through",
        color: "#c3c3c3",
    };

    const handleCheckbox = () => {
        console.log("clicked");
        setDone((prev) => {
            return !prev;
        });
    };

    const ImportanceLine = () => {
        return (
            <Box
                sx={{
                    backgroundColor: COLORS[todo.importance],
                    height: "7px",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                }}
            />
        );
    };

    return (
        <Grid
            container
            key={id}
            alignItems="center"
            justifyContent="space-between"
            sx={{
                boxShadow: 1,
                padding: 1,
                paddingX: 2,
                mb: 2,
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Grid coontainer item xs={8}>
                <Grid
                    container
                    item
                    alignItems={"center"}
                    sx={{ flexWrap: "nowrap" }}
                >
                    <Checkbox
                        value={done}
                        item
                        xs={3}
                        onClick={handleCheckbox}
                    />
                    <Typography sx={done ? titleCheckedStyle : titleStyle} item>
                        {title}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item xs={4} justifyContent="end">
                <Box item component="span" mb={1}>
                    <Typography>
                        {from} - {to}
                    </Typography>
                </Box>
                <Box item component="span">
                    <span onClick={editHandle}>
                        <EditIcon sx={{ mr: ".5rem" }} />
                    </span>
                    <span onClick={deleteHandle}>
                        <DeleteIcon />
                    </span>
                </Box>
            </Grid>
            <ImportanceLine />
        </Grid>
    );
};

export default ToDo;
