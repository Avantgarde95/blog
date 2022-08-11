import { atom } from "recoil";

export type ThemeName = "Dark" | "Light";

export const themeNameState = atom<ThemeName>({
  key: "themeName",
  default: "Dark",
});
