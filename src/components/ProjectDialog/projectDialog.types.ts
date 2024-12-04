export interface ProjectDialogProps {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  projectName: string | null;
}

export interface ProjectComponentBasicProps {
  projectName: string | null;
}

export interface ProjectTitleProps {
  projectName: string | null;
  setOpenDialog: (value: boolean) => void;
}
