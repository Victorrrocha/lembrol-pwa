import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ToDo from "./ToDo";

const ExpandedList = ({ sectionTitle }) => {
  return (
    <Accordion expanded sx={{ mt: "0px !important", mb: "1rem" }}>
      <AccordionSummary
        sx={{ backgroundColor: "#d3d3d3", minHeight: "64px" }}
        aria-controls={`panel-${sectionTitle}`}
        id={`${sectionTitle}-header`}
      >
        <Typography>{sectionTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: "1rem" }}>
        <Grid container direction="column">
          <ToDo item title="Todo 3" />
          <ToDo item title="Todo 4" />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandedList;
