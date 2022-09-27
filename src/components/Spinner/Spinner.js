import { Box } from "@mui/material";
import React from "react";
import style from "./Spinner.module.css";

function Spinner() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "100%",
                margin: "auto",
            }}
        >
            <div className={style.ldsDualRing}></div>;
        </Box>
    );
}

export default Spinner;
