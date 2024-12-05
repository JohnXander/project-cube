import { Typography } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectSubtitle = ({
  project,
}: ProjectComponentBasicProps) => (
  <Typography
    variant="subtitle1"
    sx={{
      fontSize: "1rem",
      fontWeight: "medium",
      marginBottom: "0.5rem",
      marginLeft: "1rem",
      maxWidth: "81%",
    }}
  >
    {project?.subtitle || "Subtitle"}
  </Typography>
)