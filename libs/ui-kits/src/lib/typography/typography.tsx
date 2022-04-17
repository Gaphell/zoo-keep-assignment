import styles from './typography.module.scss';
import { Typography as MatTypography } from '@mui/material';

export type TypoVariants = | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' |
  'caption' | 'button' | 'overline';
export type MatAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right';

/* eslint-disable-next-line */
export interface TypographyProps {
  label: string | number | undefined;
  variant: TypoVariants;
  align?: MatAlign;
  className?: any;
  click?: () => void;
}

export function Typography(props: TypographyProps) {
  return (
    <MatTypography variant={props.variant} align={props?.align}
                   className={props?.className} onClick={props?.click}>
      {props?.label}
    </MatTypography>
  );
}

export default Typography;
