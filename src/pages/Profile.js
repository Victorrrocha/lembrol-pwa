import { Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import NavigationHeader from "../layout/NavigationHeader";

function Profile() {
    const optionTitle = {
        fontWeight: "700",
    };

    const option = {
        textDecoration: "underline",
        cursor: "Pointer",
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
            <Box sx={{ paddingX: "1rem" }}>
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
        </>
    );
}

export default Profile;
