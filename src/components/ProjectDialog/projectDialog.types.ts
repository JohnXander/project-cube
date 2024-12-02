export interface ProjectDialogProps {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  projectName: string | null;
}