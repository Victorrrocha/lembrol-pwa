import { useState } from "react";
import img from "../assets/logo.svg";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const formGrid = {
  width: { xs: "80%" },
  margin: { xs: "0 auto" },
};

const w100 = {
  width: { xs: "100%" },
};

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickShowPassword = (passwordField) => {
    setShowPassword({
      ...showPassword,
      [passwordField]: !showPassword[passwordField],
    });
  };

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

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
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          sx={formGrid}
        >
          <Typography variant="h5" component="h1" mb={6}>
            {isLogin ? "LOGIN" : "REGISTER"}
          </Typography>

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              type="text"
              value={formValues.email}
              onChange={handleChange("email")}
              label="Email"
            />
          </FormControl>

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword.password ? "text" : "password"}
              value={formValues.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("password")}
                    edge="end"
                  >
                    {showPassword.password ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {!isLogin && (
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={showPassword.confirmPassword ? "text" : "password"}
                value={formValues.confirmPassword}
                onChange={handleChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("confirmPassword")}
                      edge="end"
                    >
                      {showPassword.confirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirmPassword"
              />
            </FormControl>
          )}
          <Button
            item
            size="small"
            sx={{ alignSelf: { xs: "flex-start" }, mb: 5 }}
          >
            Esqueceu a senha?
          </Button>

          <Button item variant="contained" sx={{ ...w100 }}>
            Entrar
          </Button>
          <Button
            item
            size="small"
            sx={{ alignSelf: { xs: "flex-end" }, mt: 1 }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Ainda não é cadastrado?" : "Já é cadastrado?"}
          </Button>
        </Grid>
        <Typography item textAlign="center">
          Copyright victor@2022
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
