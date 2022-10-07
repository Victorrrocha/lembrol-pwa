import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function NavigationHeader({ Title, returnUrl = "" }) {
    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                minHeight: "60px",
                boxShadow: "0px 1px 2px 1px rgba(189, 187, 189, 0.6)",
                marginBottom: "1rem",
                pl: "1rem",
            }}
            container
            alignItems="center"
        >
            <Box onClick={() => navigate(`/${returnUrl}`)}>
                <ArrowBackIosIcon item sx={{ cursor: "Pointer" }} />
            </Box>
            <Typography
                item
                sx={{ display: "inline-block", fontSize: "1.5rem" }}
            >
                {Title}
            </Typography>
        </Grid>
    );
}

export default NavigationHeader;
