import React, { FC } from 'react';
import { styled } from 'native-theme-ui';
import {
  ImageBackground,
  ImageBackgroundProps,
  Text as NativeText,
  TouchableOpacity
} from 'react-native';
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
  ImageProps,
  StyledImageProps,
  antiForwardImagePropsKeys,
  splitProps
} from './imageProps';

const StyledImageBackground = styled<StyledImageProps, ImageBackgroundProps>(
  ImageBackground,
  { forwardPropsBlacklist: antiForwardImagePropsKeys }
)(
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

const Image: FC<ImageProps> = (props: ImageProps) => {
  const {
    customImageProps,
    nativeImageProps,
    styledImageProps,
    touchableOpacityProps
  } = splitProps(props);
  const children =
    typeof customImageProps.children === 'string' ? (
      <NativeText>{customImageProps.children}</NativeText>
    ) : (
      customImageProps.children
    );
  const styledImageBackground = (
    <StyledImageBackground
      {...nativeImageProps}
      {...styledImageProps}
      {...(customImageProps as any)}
    >
      {children}
    </StyledImageBackground>
  );
  if (Object.keys(touchableOpacityProps).length) {
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        {styledImageBackground}
      </TouchableOpacity>
    );
  }
  return styledImageBackground;
};

Image.defaultProps = {
  height: '100%',
  resizeMode: 'stretch'
};

export default Image;
