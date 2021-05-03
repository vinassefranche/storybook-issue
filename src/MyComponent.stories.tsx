import { Story } from '@storybook/react';
import React from 'react';

import { MyComponent, MyComponentProps } from './MyComponent';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    knobs: {
      disabled: true,
    },
  },
};

const Template: Story<MyComponentProps> = props => (<MyComponent {...props}/>);

export const Playground = Template.bind({});