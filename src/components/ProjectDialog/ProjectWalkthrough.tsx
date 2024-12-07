import { Box, Typography } from "@mui/material";
import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectWalkthrough = ({ project }: ProjectComponentBasicProps) => {
  if (!project) return null;

  const walkthroughItems: { desc?: string; img?: string }[] = [];
  Object.entries(project).forEach(([key, value]) => {
    const match = key.match(/(desc|img)(\d+)$/);
    if (match) {
      const [, type, index] = match;
      const idx = parseInt(index, 10) - 1;
      if (!walkthroughItems[idx]) walkthroughItems[idx] = {};
      walkthroughItems[idx][type as "desc" | "img"] = value as string;
    }
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          textDecoration: "underline",
          marginLeft: "1rem",
          marginBottom: "1rem",
        }}
      >
        Walkthrough
      </Typography>
      {walkthroughItems.map((item, index) => (
        <Box key={index} style={{ marginBottom: '1rem'}}>
          {item.desc && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                margin: '0 1rem 1rem 1rem',
                lineHeight: "1.5",
                maxWidth: "81%",
              }}>
              {item.desc}
            </Typography>
          )}
          {item.img && (
            <Box
              component="img"
              src={item.img}
              alt={`Project walkthrough image ${index + 1}`}
              style={{
                maxWidth: "81%",
                borderRadius: "8px",
                marginLeft: '1rem',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
