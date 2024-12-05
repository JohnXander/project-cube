import { ProjectData } from "../../data/projectData.types";

export interface ProjectDialogProps {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  projectName: string | null;
}

export interface ProjectComponentBasicProps {
  projectName?: string | null;
  project: ProjectData | null;
}

export interface ProjectTitleProps {
  projectName: string | null;
  project: ProjectData | null;
  setOpenDialog: (value: boolean) => void;
}
