import React, { FC, useState, useEffect } from 'react';
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
  const [checked, setChecked] = useState<boolean>(false);
  const {
    customCheckBoxProps,
    styledCheckBoxProps,
    nativeCheckBoxProps
  } = splitProps(props);

  useEffect(() => {
    if (customCheckBoxProps.checked !== undefined)
      setChecked(customCheckBoxProps.checked);
  }, [customCheckBoxProps.checked]);

  function handleChange(e: any) {
    if (props.onPress) {
      props.onPress(e);
      setChecked(!checked);
    }
  }
  return (
    <HTMLCheckBox
      {...styledCheckBoxProps}
      {...nativeCheckBoxProps}
      {...(customCheckBoxProps as any)}
      checked={checked}
      value={checked}
      onChange={handleChange}
    />
  );
};

CheckBox.defaultProps = {
  type: 'checkbox',
  checked: false
};

export default CheckBox;
