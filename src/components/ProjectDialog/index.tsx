import { Dialog, DialogContent } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectDialogProps } from "./projectDialog.types";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectTech } from "./ProjectTech";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectSubtitle } from "./ProjectSubtitle";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectBackground } from "./ProjectBackground";

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
            <ProjectSubtitle
              project={project}
            />
            <ProjectLinks
              projectName={projectName}
              project={project}
            />
            <ProjectMedia
              project={project}
            />
            <ProjectBackground
              project={project}
            />
          </>
        )}
        {!project && <p>Loading...</p>}
      </DialogContent>
    </Dialog>
  );
};
