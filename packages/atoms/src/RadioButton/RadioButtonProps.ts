import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { NativeBase } from 'native-base';
import {
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { Theme } from '../themes';

export type DetailedHTMLRadioButtonProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface StyledRadioButtonProps
  extends BorderProps,
    // ColorProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface NativeRadioButtonProps extends NativeBase.Radio {}

export interface CustomRadioButtonProps {
  autoContrast?: boolean | 'A' | 'AA' | 'AAA';
  theme?: Theme;
  type?: string;
  children?: ReactNode | string;
  checked?: boolean;
}

export interface RadioButtonProps
  extends CustomRadioButtonProps,
    NativeRadioButtonProps,
    StyledRadioButtonProps {
  disabled?: boolean;
}

export const customRadioButtonPropsKeys = new Set([
  'autoContrast',
  'theme',
  'disabled',
  'checked',
  'onChange',
  'value'
]);

export const nativeRadioButtonPropsKeys = new Set([
  'onPress',
  'onPressIn',
  'onPressOut',
  'onValueChange'
]);

export interface SplitProps {
  customRadioButtonProps: CustomRadioButtonProps;
  nativeRadioButtonProps: NativeRadioButtonProps;
  styledRadioButtonProps: StyledRadioButtonProps;
}

export function splitProps(props: RadioButtonProps): SplitProps {
  const styledRadioButtonProps: { [key: string]: any } = {};
  const customRadioButtonProps: { [key: string]: any } = {};
  const nativeRadioButtonProps: { [key: string]: any } = {};
  Object.entries({ ...props }).forEach(([key, prop]: [string, any]) => {
    if (customRadioButtonPropsKeys.has(key)) {
      customRadioButtonProps[key] = prop;
    } else if (nativeRadioButtonPropsKeys.has(key)) {
      nativeRadioButtonProps[key] = prop;
    } else {
      styledRadioButtonProps[key] = prop;
    }
  });

  return {
    customRadioButtonProps,
    nativeRadioButtonProps,
    styledRadioButtonProps
  };
}

export const antiForwardRadioButtonPropsKeys = new Set<string>([]);