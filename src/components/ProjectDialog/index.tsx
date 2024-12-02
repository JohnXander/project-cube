import { Box, Button, Dialog, DialogContent, DialogTitle, Link, Tooltip, Typography } from "@mui/material";
import { projectData } from "../../data/projectData";
import { ProjectDialogProps } from "./projectDialog.types";

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
    <DialogTitle sx={{ color: "white", position: "relative", padding: "1rem 2rem"}}>
      <Typography variant="h4" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
      {projectName && projectData[projectName as keyof typeof projectData]
        ? projectData[projectName as keyof typeof projectData].title
        : "Project Name"}
      {" "}
      ({projectName && projectData[projectName as keyof typeof projectData].year || "Year"})
      </Typography>
      <Button
        onClick={() => setOpenDialog(false)}
        sx={{
          position: "absolute",
          top: "8px",
          right: "20px",
          color: "white",
          fontSize: "1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textTransform: "none",
          padding: 0,
          minWidth: 0,
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        }}
      >
        ㄨ
      </Button>
    </DialogTitle>
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
      {projectName && projectData[projectName as keyof typeof projectData]?.tech && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginLeft: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          {projectData[projectName as keyof typeof projectData].tech!.map((tech) => {
            const domainMap: Record<string, string> = {
              "Electron": "electronjs.org",
              "TypeScript": "typescriptlang.org",
              "MongoDB": "mongodb.com",
              "Express": "expressjs.com",
              "React": "react.dev",
              "TanStack Query": "tanstack.com",
              "Node": "nodejs.org",
              "Tailwind": "tailwindcss.com",
              "Redux": "redux.js.org",
              "Next JS": "nextjs.org",
              "Prisma": "prisma.io",
              "tRPC": "trpc.io",
              "Postgres": "postgresql.org",
              "Three.js": "threejs.org",
              "MUI": "mui.com",
              "React Native": "reactnative.dev",
            };

            const domain = domainMap[tech];
            if (!domain) return null; 

            const iconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;

            return (
              <Tooltip key={tech} title={tech}>
                <img
                  src={iconUrl}
                  alt={tech}
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    backgroundColor: "#1e293b",
                  }}
                />
              </Tooltip>
            );
          })}
        </Box>
      )}
    
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
        ) : projectData[projectName as keyof typeof projectData].image ? (
          <img
            src={projectData[projectName as keyof typeof projectData].image}
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
    </DialogContent>
  </Dialog>
)