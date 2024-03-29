import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NAV_LINKS {
  path: string;
  name: string;
}

export interface SOCIAL_LINKS {
  Icon: ReactNode;
}

export interface ProjectData {
  id: number;
  title: string;
  screenshot: StaticImageData;
  projectURL: string;
  technologies: Array<string>;
  banner: StaticImageData;
  liveSite: string;
  github: string;
  intro: string;
  keyFeatures: string[];
}
