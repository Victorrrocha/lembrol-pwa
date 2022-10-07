import { Box } from "@mui/system";
import React from "react";

function Page({ children }) {
    return <Box sx={{ paddingX: "1rem" }}>{children}</Box>;
}

export default Page;
