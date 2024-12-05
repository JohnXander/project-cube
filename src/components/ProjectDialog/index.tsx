import { Dialog, DialogContent, Typography } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectDialogProps } from "./projectDialog.types";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectTech } from "./ProjectTech";
import { ProjectLinks } from "./ProjectLinks";

export const ProjectDialog = ({
  openDialog,
  setOpenDialog,
  projectName
}: ProjectDialogProps) => {
  const project = projectName ? projectData[projectName as keyof typeof projectData] : null;

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      fullWidth
      maxWidth="xl"
      PaperProps={{
        sx: {
          width: '75vw',
          height: '100vh', 
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          '@media (min-width: 800px)': {
            width: '50vw',
          },
          '@media (max-width: 600px)': {
            width: '100vw', 
          },
        },
      }}
    >
      <ProjectTitle
        projectName={projectName}
        project={project}
        setOpenDialog={setOpenDialog}
      />
      <DialogContent
          sx={{
          height: "calc(100vh - 64px)",
          maxHeight: "calc(100vh - 64px)",
          width: '100%',
          padding: 2,
          paddingTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          overflowY: "auto", 
          color: "white",
        }}
      >
        <ProjectTech
          projectName={projectName}
          project={project}
        />

        {project && (
          <>
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
              {project.subtitle || "Subtitle"}
            </Typography>
            <ProjectLinks
              projectName={projectName}
              project={project}
            />
            {project.video ? (
              <video
                src={project.video}
                controls
                style={{
                  maxWidth: "81%",
                  maxHeight: "70%",
                  borderRadius: "8px",
                  marginLeft: '1rem',
                }}
              />
            ) : project.mainImage ? (
              <img
                src={project.mainImage}
                alt={project.title || "Image"}
                style={{
                  maxWidth: "81%",
                  maxHeight: "70%",
                  borderRadius: "8px",
                  marginLeft: '1rem',
                }}
              />
            ) : (
              <p>No media available</p>
            )}

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
              {project.background || "Background"}
            </Typography>
          </>
        )}

        {!project && <p>Loading...</p>}
      </DialogContent>
    </Dialog>
  );
};
