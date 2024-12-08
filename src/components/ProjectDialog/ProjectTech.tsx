import { Box, Tooltip } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectTech = ({
  projectName,
  project,
}: ProjectComponentBasicProps) => (
  <>
    {projectName && project?.tech && (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginLeft: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {project.tech.map((tech) => {
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
            "Firebase": "firebase.google.com",
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
  </>
);