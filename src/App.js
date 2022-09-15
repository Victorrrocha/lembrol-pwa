import { Container } from "@mui/material";
import "./App.css";
import Login from "./pages/Login";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"xs"} className="App">
        <Login />
      </Container>
    </ThemeProvider>
  );
}

export default App;
