import { Typography } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectBackground = ({
  project,
}: ProjectComponentBasicProps) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: "1rem",
      marginTop: "1rem",
      marginLeft: "1rem",
      lineHeight: "1.5",
      maxWidth: "81%",
    }}
  >
    {project?.background || "Background"}
  </Typography>
)
