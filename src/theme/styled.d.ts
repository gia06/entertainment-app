import "styled-components";

interface Colors {
  backgroundColor: string;
  formBackground: string;
  caretColor: string;
  inputBorder: string;
  submitButton: string;
}

interface Svgs {
  siteLogo: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    svgs: Svgs;
  }
}
