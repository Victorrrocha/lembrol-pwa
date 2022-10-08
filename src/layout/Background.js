import { Box } from "@mui/system";
import React from "react";

function Background({ children }) {
    return (
        <Box
            sx={{
                position: "relative",
                height: "85vh",
                overflow: "hidden",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "20px",
            }}
        >
            {children}
        </Box>
    );
}

export default Background;
