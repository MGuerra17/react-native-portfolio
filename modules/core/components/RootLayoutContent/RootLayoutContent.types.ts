import type { getRootLayoutContentStyles } from "./RootLayoutContent.styles";

export type RootLayoutContentProps = {
  styles: ReturnType<typeof getRootLayoutContentStyles>;
  statusBarStyle: "light" | "dark";
};
