import { ReactNode } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { themeNameState } from "states/Theme";
import Layout from "templates/Layout";
import { globalStyle } from "styles/Global";
import { darkTheme, lightTheme } from "styles/Theme";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <CurrentTheme>
      <Global styles={globalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentTheme>
  </RecoilRoot>
);

interface CurrentThemeProps {
  children: ReactNode;
}

const CurrentTheme = ({ children }: CurrentThemeProps) => {
  const themeName = useRecoilValue(themeNameState);

  return <ThemeProvider theme={themeName === "Dark" ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default App;
