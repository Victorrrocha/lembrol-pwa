import { Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DashboardHeader = () => {
    return (
        <Grid container direction="row" mb={2}>
            <Grid container item direction="column" flex="2">
                <Typography
                    sx={{ display: "inline-block" }}
                    item
                    component="h1"
                    variant="h4"
                >
                    Quarta-feira,
                </Typography>
                <Typography
                    sx={{ display: "inline-block" }}
                    item
                    component="h2"
                    variant="h6"
                >
                    19/05/2022
                </Typography>
            </Grid>
            <Grid container item flex="1" justifyContent="flex-end">
                <AccountCircleIcon item sx={{ fontSize: "4rem" }} />
            </Grid>
        </Grid>
    );
};

export default DashboardHeader;
