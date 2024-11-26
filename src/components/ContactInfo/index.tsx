import { Box, Link, Typography } from "@mui/material";

export const ContactInfo = () => (
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
    <Box>
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
        href="https://www.linkedin.com/in/john-bloxam-210207250"
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
    </Box>
  </Box>
)