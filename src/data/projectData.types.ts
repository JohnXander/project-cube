import { Project } from "../../lib/enums/projects.enum";

export type ProjectKey = Project.klipboar | Project.minilrs | Project.geoquix | Project.projectcube | Project.captivote | Project.avatarify;

export interface ProjectData {
  title: string;
  year?: string;
  subtitle?: string;
  description: string;
  video?: string;
  image?: string;
  tech?: string[];
  repo?: string;
  site?: string;
}