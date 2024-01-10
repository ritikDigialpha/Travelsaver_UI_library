import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../src/Button';
const meta: Meta = {
  title: 'Components',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: any = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const primary = Template.bind({});

primary.args = {};
