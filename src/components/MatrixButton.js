import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "150px",
  minHeight: "100px",
  padding: "1rem",
  color: "#fff",
  backgroundColor: "blue",
}));

const MatrixButton = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default MatrixButton;
