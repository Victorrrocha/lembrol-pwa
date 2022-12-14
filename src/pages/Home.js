import { Box, Fab, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import TodoList from "../components/TodoList";
import DashboardHeader from "../components/DashboardHeader";
import AddIcon from "@mui/icons-material/Add";
import TodoContext from "../Context/todo-context";
import { CONSTANTS } from "../helpers/constants";
import Spinner from "../components/Spinner/Spinner";
import Page from "../layout/Page";

const Home = () => {
    const navigate = useNavigate();
    // let loggedIn = false;
    const context = useContext(TodoContext);
    const [expanded, setExpanded] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const forToday = context.getTodosForToday();
    const nextUrgent = context.getTodoByImportance(
        CONSTANTS.URGENT_AND_IMPORTANT
    );
    const couldBeRescheduled = context.getTodoByImportance(
        CONSTANTS.COULD_BE_RESCHEDULED
    );
    const couldBeDelegated = context.getTodoByImportance(
        CONSTANTS.COULD_BE_DELEGATED
    );
    const notImportant = context.getTodoByImportance(CONSTANTS.NOT_IMPORTANT);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem("user");
        setLoggedIn(() => isLoggedIn);
        !isLoggedIn && navigate("/auth");
    }, [navigate]);

    if (!loggedIn) {
        return <Spinner />;
    }

    return (
        <Page>
            <DashboardHeader />
            <Box
                sx={{
                    position: "relative",
                    maxHeight: "600px",
                    overflow: "scroll",
                    overflowX: "hidden",
                }}
            >
                <Grid container direction="column">
                    <TodoList
                        key={CONSTANTS.TODAY}
                        type={CONSTANTS.TODAY}
                        sectionTitle="Para Hoje"
                        expanded={expanded}
                        handleChange={handleChange}
                        keepOpen={true}
                        todos={forToday}
                    />
                    <TodoList
                        key={CONSTANTS.URGENT_AND_IMPORTANT}
                        type={CONSTANTS.URGENT_AND_IMPORTANT}
                        sectionTitle="Pr??ximas Urgentes"
                        expanded={expanded}
                        handleChange={handleChange}
                        todos={nextUrgent}
                    />
                    <TodoList
                        key={CONSTANTS.COULD_BE_RESCHEDULED}
                        type={CONSTANTS.COULD_BE_RESCHEDULED}
                        sectionTitle="Podem ser reagendadas"
                        expanded={expanded}
                        handleChange={handleChange}
                        todos={couldBeRescheduled}
                    />
                    <TodoList
                        key={CONSTANTS.COULD_BE_DELEGATED}
                        type={CONSTANTS.COULD_BE_DELEGATED}
                        sectionTitle="Podem ser delegadas"
                        expanded={expanded}
                        handleChange={handleChange}
                        todos={couldBeDelegated}
                    />
                    <TodoList
                        key={CONSTANTS.NOT_IMPORTANT}
                        type={CONSTANTS.NOT_IMPORTANT}
                        sectionTitle="N??o importantes"
                        expanded={expanded}
                        handleChange={handleChange}
                        todos={notImportant}
                    />
                </Grid>
            </Box>
            <Fab
                onClick={() => navigate("/new")}
                sx={{ position: "absolute", right: 15, bottom: 15 }}
                color="primary"
                aria-label="add"
                size="large"
            >
                <AddIcon />
            </Fab>
        </Page>
    );
};

export default Home;
