import { Button } from "@mui/material";
import { BackToTopButtonProps } from "./projectDialog.types";

export const BackToTopButton = ({
  handleBackToTop,
}: BackToTopButtonProps) => (
  <Button
    onClick={handleBackToTop}
    sx={{
      background: 'none',
      color: "#7dd3fc",
      textDecoration: "none",
      marginLeft: "1rem",
      padding: 0,
      marginBottom: '1rem',
      fontWeight: "bold",
      "&:hover": {
        color: "#38bdf8",
      },
      "&:focus": {
        outline: "none",
      },
    }}
  >
    Back to Top
  </Button>
)