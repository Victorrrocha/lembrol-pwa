import { Container } from "@mui/material";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";
import { TodoProvider } from "./Context/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Background from "./layout/Background";
import Profile from "./pages/Profile";
import { COLORS } from "./helpers/constants";

const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.PRIMARY_SOLID,
        },
    },
});

function App() {
    return (
        <TodoProvider>
            <Router>
                <ThemeProvider theme={theme}>
                    <Container
                        sx={{
                            backgroundColor: "transparent",
                            paddingY: "1rem",
                            height: { xs: "100vh" },
                            display: "flex",
                            alignItems: "center",
                        }}
                        className="App"
                    >
                        <Background>
                            <Routes>
                                <Route path="/auth" element={<Login />} />
                                <Route path="/" element={<Home />} />
                                <Route path="/new" element={<NewTodo />} />
                                <Route path="/edit/:id" element={<NewTodo />} />
                                <Route path="/user" element={<Profile />} />
                            </Routes>
                        </Background>
                    </Container>
                </ThemeProvider>
            </Router>
        </TodoProvider>
    );
}

export default App;
