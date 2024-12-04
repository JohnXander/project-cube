import { Box, Link } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";
import { projectData } from "../../data/projectData";

export const ProjectLinks = ({
  projectName,
}: ProjectComponentBasicProps) => (
  <Box sx={{ margin: '1rem 0.5rem' }}>
    {projectName && projectData[projectName as keyof typeof projectData].repo && (
      <Link
        href={projectData[projectName as keyof typeof projectData].repo}
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
        GitHub Repo
      </Link>
    )}
    {projectName && projectData[projectName as keyof typeof projectData].site && (
      <Link
        href={projectData[projectName as keyof typeof projectData].site}
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
        Live Site
      </Link>
    )}
  </Box>
)