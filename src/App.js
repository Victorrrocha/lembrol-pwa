import { Container } from "@mui/material";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";
import { TodoProvider } from "./Context/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    components: {},
});

function App() {
    return (
        <TodoProvider>
            <Router>
                <ThemeProvider theme={theme}>
                    <Container
                        maxWidth="xs"
                        sx={{ paddingY: "1rem" }}
                        className="App"
                    >
                        <Routes>
                            <Route path="/auth" element={<Login />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/new" element={<NewTodo />} />
                            <Route path="/edit/:id" element={<NewTodo />} />
                        </Routes>
                    </Container>
                </ThemeProvider>
            </Router>
        </TodoProvider>
    );
}

export default App;
