import {
    Grid,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToDo from "./ToDo";
import { COLORS } from "../helpers/constants";

const TodoList = ({
    sectionTitle,
    expanded,
    handleChange,
    keepOpen,
    todos,
    type,
}) => {
    const formatIdentification = (title) => {
        return title.replace("", "-").toLowerCase();
    };

    const todosElements = todos.map((todo) => <ToDo item todo={todo} />);

    return (
        <Accordion
            expanded={expanded === sectionTitle || !!keepOpen}
            onChange={!!keepOpen ? () => {} : handleChange(sectionTitle)}
            sx={{ mt: "0px !important", mb: "1rem" }}
        >
            <AccordionSummary
                sx={{ backgroundColor: COLORS[type], minHeight: "64px" }}
                expandIcon={
                    !!keepOpen ? "" : <ExpandMoreIcon sx={{ fill: "#fff" }} />
                }
                aria-controls={`panel-${formatIdentification(sectionTitle)}`}
                id={`${formatIdentification(sectionTitle)}-header`}
            >
                <Typography
                    sx={{ color: "#fff", fontWeight: 400, fontSize: "1.3rem" }}
                >
                    {sectionTitle} [{todos.length}]
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: "1rem" }}>
                <Grid container direction="column">
                    {todosElements}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default TodoList;
