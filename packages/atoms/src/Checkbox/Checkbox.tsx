import React, { FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import useColor from '../hooks/useColor';
import {
  CheckBoxProps,
  DetailedHTMLCheckBoxProps,
  splitProps
} from './checkboxProps';

const HTMLCheckBox: StyledComponent<
  DetailedHTMLCheckBoxProps,
  CheckBoxProps,
  object
> = styled.input(
  compose(
    background,
    border,
    color,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const color = useColor(props);
  const {
    customCheckBoxProps,
    styledCheckBoxProps,
    nativeItemProps
  } = splitProps({
    ...props,
    color
  });
  return (
    <HTMLCheckBox
      {...styledCheckBoxProps}
      {...nativeItemProps}
      {...(customCheckBoxProps as any)}
    />
  );
};

CheckBox.defaultProps = {
  // backgroundColor: 'primary',
  // borderRadius: 2,
  // borderWidth: 0,
  // fontFamily: 'body',
  // fontSize: 2,
  // fontWeight: 'body',
  // lineHeight: 'body',
  // paddingBottom: 2,
  // paddingLeft: 2,
  // paddingRight: 2,
  // paddingTop: 2,
  // width: '100%',
  type: 'checkbox'
};

export default CheckBox;
