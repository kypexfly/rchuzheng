import { Icon } from "tabler-icons-react";

export type Social = {
  label: string;
  url: string;
  icon: Icon;
};

export type SiteConfig = {
  title: string;
  description: string;
  url: string;
  logo: string;
};

export type Project = {
  title: string;
  description: string;
  date?: number;
  source?: string;
  demo?: string;
  article?: string;
  tech?: string[];
  highlight?: boolean;
};
