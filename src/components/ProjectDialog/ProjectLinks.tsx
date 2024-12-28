import { Box, Link } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectLinks = ({
  projectName,
  project,
}: ProjectComponentBasicProps) => (
  <Box sx={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>
    {projectName && project?.repo && (
      <Link
        href={project.repo}
        target="_blank"
        sx={{
          color: "#7dd3fc",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          "&:hover": {
            color: "#38bdf8",
          },
        }}
        >
        GitHub Repo
      </Link>
    )}
    {projectName && project?.site && (
      <Link
        href={project.site}
        target="_blank"
        sx={{
          color: "#7dd3fc",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          "&:hover": {
            color: "#38bdf8", 
          },
        }}
        >
        Live Site
      </Link>
    )}
    {projectName && project?.api && (
      <Link
        href={project.api}
        target="_blank"
        sx={{
          color: "#7dd3fc",
          textDecoration: "none",
          margin: "0 10px",
          fontWeight: "bold",
          "&:hover": {
            color: "#38bdf8", 
          },
        }}
        >
        API Used
      </Link>
    )}
  </Box>
)