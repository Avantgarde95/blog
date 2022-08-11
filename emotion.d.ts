import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    color: {
      background: string;
      default: string;
      light: string;
      dark: string;
    };
  }
}
