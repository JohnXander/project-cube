import { Box, Typography } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectWalkthrough = ({
  project,
}: ProjectComponentBasicProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "1rem",
    }}
  >
    <Typography variant="h4" sx={{
      fontSize: "1.25rem",
      fontWeight: "bold",
      textDecoration: 'underline',
      marginLeft: "1rem",
    }}>
      Walkthrough
    </Typography>
    {project?.desc1}
  </Box>

)