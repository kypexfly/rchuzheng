import { Icon } from "tabler-icons-react";

export type Social = {
  label: string;
  url: string;
  icon: Icon;
};

export type Route = {
  path: string;
  name: string;
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
  date: string;
  source?: string;
  cover?: string;
  demo?: string;
  article?: string;
  tech?: string[];
  highlight?: boolean;
};

// export type Post = {
//   title: string;
//   description: string;
//   date: string;
//   src: string;
// };
