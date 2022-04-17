import styles from './button.module.scss';
import { Button as MatButton } from '@mui/material'
import React, { memo } from 'react';

export type MatColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type MatVariants = 'text' | 'outlined' | 'contained';

/* eslint-disable-next-line */
export interface ButtonProps {
  label?: string;
  child?: JSX.Element;
  color?: MatColors;
  variant?: MatVariants;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

export function Button(props: ButtonProps) {
  return (
    <MatButton
      color={props?.color}
      variant={props?.variant}
      onClick={props?.onClick}
      disabled={props?.disabled}
      className={props?.className}
      type={props?.type}
    >
      {props.label}
      {props?.child}
    </MatButton>
  );
}

export default memo(Button);
