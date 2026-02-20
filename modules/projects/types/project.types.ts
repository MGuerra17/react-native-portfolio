import type { ImageSourcePropType } from "react-native";

export enum ProjectCategory {
  Performance = "performance",
  Uiux = "uiux",
  Architecture = "architecture",
  NativeModules = "native_modules",
  Other = "other",
}

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  href: string;
  imageLight?: ImageSourcePropType;
  imageDark?: ImageSourcePropType;
};
