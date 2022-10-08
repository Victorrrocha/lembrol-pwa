import { Button, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import NavigationHeader from "../layout/NavigationHeader";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const optionTitle = {
        fontWeight: "700",
    };

    const option = {
        textDecoration: "underline",
        cursor: "Pointer",
    };

    const handleLogout = () => {
        // delete the localstorage
        localStorage.removeItem("user");
        // go back to /auth
        navigate("/auth");
    };

    return (
        <>
            <NavigationHeader Title="Perfil" />
            <Grid
                container
                flex="1"
                alignItems="center"
                sx={{ flexDirection: "column", marginBottom: "2rem" }}
            >
                <AccountCircleIcon item sx={{ fontSize: "6rem" }} />
                <Grid container justifyContent="center" alignItems="center">
                    <Typography item variant="h5" component="h1">
                        Victor Rocha
                    </Typography>
                    <EditIcon item sx={{ cursor: "Pointer" }} />
                </Grid>
            </Grid>
            <Box sx={{ paddingX: "1rem", maxWidth: "400px", margin: "0 auto" }}>
                <Grid container justifyContent="space-between" mb=".5rem">
                    <Typography sx={optionTitle} item>
                        Idioma
                    </Typography>
                    <Typography sx={option} item>
                        Português
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Typography sx={optionTitle} item>
                        Tema
                    </Typography>
                    <Typography sx={option} item>
                        Claro
                    </Typography>
                </Grid>
            </Box>
            <Grid justifyContent="center" container mt="3rem">
                <Button
                    item
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Grid>
        </>
    );
}

export default Profile;
