import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { AirlineLogo } from '../src/AirlineLogos/Airlinelogo';

const meta: Meta = {
  title: 'Components',
  component: AirlineLogo,
  argTypes: {
    AirlineCode: {
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

const Template: StoryFn<any> = args => <AirlineLogo {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const LogoOne = Template.bind({});
export const LogoTwo = Template.bind({});

LogoOne.args = {
  AirlineCode: 1,
};
LogoTwo.args = {
  AirlineCode: 2,
};
