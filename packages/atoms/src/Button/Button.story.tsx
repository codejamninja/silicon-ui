import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  select,
  boolean,
  color
} from '@storybook/addon-knobs';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Button.docs.mdx';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Button
        backgroundColor={color('backgroundColor', 'primary')}
        borderRadius={number('borderRadius', 0)}
        borderColor={color('borderColor', '')}
        borderWidth={number('borderWidth', 2)}
        borderStyle={text('borderStyle', 'solid')}
        borderBottomWidth={number('borderBottomWidth', 1)}
        // borderBottomColor={text('border-bottom-color', '')}
        // borderBottomLeftRadius={number('border-left-radius', 0)}
        // borderBottomRightRadius={number('border-right-radius', 0)}
        borderLeftWidth={number('borderLeftWidth', 1)}
        // borderLeftColor={text('border-left-color', '')}
        borderRightWidth={number('borderRightWidth', 1)}
        // borderRightColor={text('border-right-color', '')}
        borderTopWidth={number('borderTopWidth', 1)}
        // borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        // borderTopRightRadius={number('borderTop-RightRadius', 0)}
        // borderTopColor={text('border-top-color', '')}
        disabled={boolean('disabled', false)}
        // margin={number('margin', 0)}
        marginBottom={number('marginBottom', 0)}
        marginLeft={number('marginLeft', 2)}
        marginRight={number('marginRight', 0)}
        marginTop={number('marginTop', 2)}
        name={text('name', 'button')}
        onFocus={action('onFocus')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        padding={number('padding', 2)}
        type={text('type', 'submit')}
        value={text('value', 'button')}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA'
        )}
      >
        {text('children', 'click me')}
      </Button>
    </Wrapper>
  ));
