import { FieldError } from "react-hook-form/dist/types/errors";

interface IsError {
  hookForm: FieldError | undefined;
  custom: boolean;
}

export interface InputProps {
  isError: IsError;
  // isError: boolean; //FieldError | undefined;
}

export interface NavIconProps {
  $isSelected: boolean;
}
