import { Box, Link, Typography } from "@mui/material";
import { ContactInfoProps } from "./contactInfo.types";

export const ContactInfo = ({
  toggleAudio,
  isMuted
}: ContactInfoProps) => (
  <Box
    sx={{
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      textAlign: "center",
      color: "white",
    }}
  >
    <Typography variant="body2" sx={{ mb: '0.25rem' }}>
      Connect with me:
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
      }}
    >
      <Link
        href="https://github.com/JohnXander"
        target="_blank"
        sx={{
          color: "white",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          "&:hover": {
            color: "#7dd3fc",
          },
        }}
      >
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/johnny-bloxam-210207250/"
        target="_blank"
        sx={{
          color: "white",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          fontSize: "1rem",
          "&:hover": {
            color: "#7dd3fc",
          },
        }}
      >
        LinkedIn
      </Link>
      <Link
        href="mailto:your-email@example.com"
        sx={{
          color: "white",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          fontSize: "1rem",
          "&:hover": {
            color: "#7dd3fc",
          },
        }}
      >
        Email
      </Link>
      <button
        onClick={toggleAudio}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "white",
          outline: "none",
          marginLeft: '10px',
        }}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </Box>
  </Box>
);
