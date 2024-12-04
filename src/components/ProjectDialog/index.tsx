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
}: ProjectDialogProps) => (
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
      />
    
      {projectName && projectData[projectName as keyof typeof projectData] && (
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1rem",
            fontWeight: "medium",
            marginBottom: "1rem",
            marginLeft: "1rem",
            maxWidth: "81%",
          }}
        >
          {projectData[projectName as keyof typeof projectData].subtitle || "Subtitle"}
        </Typography>
      )}

      {projectName && projectData[projectName as keyof typeof projectData] ? (
        projectData[projectName as keyof typeof projectData].video ? (
          <video
            src={projectData[projectName as keyof typeof projectData].video}
            controls
            style={{
              maxWidth: "81%",
              maxHeight: "70%",
              borderRadius: "8px",
              marginLeft: '1rem',
            }}
          />
        ) : projectData[projectName as keyof typeof projectData].mainImage ? (
          <img
            src={projectData[projectName as keyof typeof projectData].mainImage}
            alt={projectData[projectName as keyof typeof projectData].title || "Image"}
            style={{
              maxWidth: "81%",
              maxHeight: "70%",
              borderRadius: "8px",
              marginLeft: '1rem',
            }}
          />
        ) : (
          <p>No media available</p>
        )
      ) : (
        <p>Loading...</p>
      )}

      {projectName && projectData[projectName as keyof typeof projectData] && (
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
          {projectData[projectName as keyof typeof projectData].description || "Description"}
        </Typography>
      )}

      <ProjectLinks
        projectName={projectName}
      />
    </DialogContent>
  </Dialog>
)