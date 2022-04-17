import styles from './text-field.module.scss';
import { TextField as MatTextField } from '@mui/material';
import { ChangeEventHandler, FocusEventHandler } from "react";

export type MatTextFieldVariants = "outlined" | "standard" | "filled" | undefined;

/* eslint-disable-next-line */
export interface TextFieldProps {
  label: string;
  required?: boolean;
  variant: MatTextFieldVariants;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export function TextField(props: TextFieldProps) {
  const {label, variant, required, onChange, onFocus} = props;
  return (
    <MatTextField label={label} variant={variant} required={required} onChange={onChange} onFocus={onFocus}/>
  );
}

export default TextField;
