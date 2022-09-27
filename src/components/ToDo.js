import { Box, Grid, Checkbox, FormControlLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import TodoContext from "../Context/todo-context";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../helpers/constants";

const ToDo = ({ todo }) => {
    const navigate = useNavigate();
    const context = useContext(TodoContext);
    const { id, title } = todo;

    const editHandle = () => {
        navigate(`edit/${id}`);
    };

    const deleteHandle = (e) => {
        e.preventDefault();
        context.deleteTodo(id);
    };

    return (
        <Grid
            container
            item
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
            <FormControlLabel item control={<Checkbox />} label={title} />
            <Grid>
                <span onClick={editHandle}>
                    <EditIcon sx={{ mr: ".5rem" }} />
                </span>
                <span onClick={deleteHandle}>
                    <DeleteIcon />
                </span>
            </Grid>
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
        </Grid>
    );
};

export default ToDo;
