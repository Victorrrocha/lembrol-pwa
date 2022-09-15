import img from "../assets/logo.svg";
import {
  Box,
  Button,
  Grid,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

const textFieldStyle = {
  width: { xs: "80%" },
};

function Login() {
  return (
    <Grid container direction="column" alignItems="center" height="100%">
      <Grid container flex="1" justifyContent="center" alignItems="center">
        <img
          src={img}
          alt="logo"
          style={{ width: "80%", objectFit: "contain" }}
        />
      </Grid>
      <Grid
        container
        item
        flex="2"
        direction="column"
        sx={{ justifyContent: "space-between" }}
      >
        <Grid container item direction="column" alignItems="center">
          <Typography variant="h5" component="h1" mb={6}>
            LOGIN
          </Typography>
          <TextField
            item
            variant="outlined"
            label="Email"
            margin="normal"
            sx={textFieldStyle}
          />
          <TextField
            item
            variant="outlined"
            label="Password"
            margin="normal"
            sx={textFieldStyle}
          />
          <Box item>
            <Button>Entrar</Button>
          </Box>
        </Grid>
        <Typography item textAlign="center">
          Copyright victor@2022
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
