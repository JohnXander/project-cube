import { Box, Button, Typography } from "@mui/material";

interface LaptopControlsProps {
  setShowInstructions: (value: boolean) => void;
}

export const LaptopControls = ({ setShowInstructions }: LaptopControlsProps) => (
  <Box
    sx={{
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
      zIndex: 10,
      textAlign: "left",
      paddingLeft: "1rem",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "5px",
      width: "280px", 
      fontSize: "0.875rem",
    }}
  >
    <Button
      onClick={() => setShowInstructions(false)}
      sx={{
        position: "absolute",
        top: '0.5rem',
        right: '0.75rem',
        color: "white",
        fontSize: "0.75rem",
        background: "none",
        border: "none",
        cursor: "pointer",
        textTransform: "none",
        outline: "none",
        padding: "0 !important", 
        minWidth: 0, 
        "&:focus": {
          outline: "none",
        },
      }}
    >
      ㄨ
    </Button>
    <Typography
      variant="h6"
      sx={{
        fontSize: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.75rem",
        color: '#f8fafc'
      }}
    >
      <strong style={{ color: '#7dd3fc', fontSize: '1rem' }}>LAPTOP CONTROLS</strong> <br />
      🖱️ Rotate the cube by dragging with the mouse. <br />
      🔍 Zoom in and out using the scroll wheel. <br />
      👆 Double click on a cube face to view a project.
    </Typography>
  </Box>
)