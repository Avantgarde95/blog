import { atom } from "recoil";

import { ThemeName } from "models/Theme";

export const themeNameState = atom<ThemeName>({
  key: "themeName",
  default: "Dark",
});
