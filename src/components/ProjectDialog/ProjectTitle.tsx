import { Button, DialogTitle, Typography } from "@mui/material";
import { ProjectTitleProps } from "./projectDialog.types";

export const ProjectTitle = ({
  projectName,
  project,
  setOpenDialog,
}: ProjectTitleProps) => (
  <DialogTitle sx={{ color: "white", position: "relative", padding: "1rem 2rem"}}>
    <Typography variant="h4" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
    {projectName
      ? project?.title
      : "Project Name"}
    {" "}
    ({project?.year || "Year"})
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
);