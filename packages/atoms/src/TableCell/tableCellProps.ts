import { DetailedHTMLProps, TdHTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { Theme } from '../themes';

export type DetailedHTMLTdProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

export interface StyledTableCellProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface CustomTableCellProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  style?: any;
}

export interface TableCellProps
  extends CustomTableCellProps,
    StyledTableCellProps {}

export interface SplitProps {
  customTableCellProps: CustomTableCellProps;
  styledTableCellProps: StyledTableCellProps;
}

export const customTableCellPropsKeys = new Set(['autoContrast', 'theme']);

export function splitProps(props: TableCellProps): SplitProps {
  const styledTableCellProps: { [key: string]: any } = {};
  const customTableCellProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customTableCellPropsKeys.has(key)) {
      customTableCellProps[key] = prop;
    } else {
      styledTableCellProps[key] = prop;
    }
  });
  return {
    customTableCellProps,
    styledTableCellProps
  };
}

export const antiForwardTdPropsKeys = new Set<string>([]);
