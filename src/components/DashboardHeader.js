import { Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import dayjs from "dayjs";
import { DAYS } from "../helpers/constants";

const DashboardHeader = () => {
    const dayOfTheWeek = DAYS[dayjs().day()];
    const today = `${dayjs().get("date")}/${
        dayjs().get("month") + 1
    }/${dayjs().get("year")}`;

    return (
        <Grid container direction="row" pt={2} pb={2}>
            <Grid container item direction="column" flex="2">
                <Typography
                    sx={{ display: "inline-block" }}
                    item
                    component="h1"
                    variant="h4"
                >
                    {dayOfTheWeek},
                </Typography>
                <Typography
                    sx={{ display: "inline-block" }}
                    item
                    component="h2"
                    variant="h6"
                >
                    {today}
                </Typography>
            </Grid>
            <Grid container item flex="1" justifyContent="flex-end">
                <AccountCircleIcon item sx={{ fontSize: "4rem" }} />
            </Grid>
        </Grid>
    );
};

export default DashboardHeader;
