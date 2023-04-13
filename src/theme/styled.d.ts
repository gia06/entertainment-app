import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    formBackground: string;
    caretColor: string;
    inputBorder: string;
    submitButton: string;
  }
}
