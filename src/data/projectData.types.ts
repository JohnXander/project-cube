import { Project } from "../../lib/enums/projects.enum";

export type ProjectKey = Project.klipboar | Project.minilrs | Project.geoquix | Project.projectcube | Project.captivote | Project.avatarify;

export interface ProjectData {
  title: string;
  year?: string;
  subtitle?: string;
  video?: string;
  mainImage?: string;
  tech?: string[];
  repo?: string;
  site?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  background?: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
}