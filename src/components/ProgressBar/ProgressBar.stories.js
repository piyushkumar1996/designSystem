import React from 'react';
import ProgressBar from './index';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progressValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    bgColor: {
      control: 'color',
    },
    variant: {
      control: 'select',
      options: ['linear'],
    },
  },
};

export const Default = {
  args: {
    progressValue: 50,
    label: 'Progress',
    heading: 'Progress Bar',
    min: 0,
    max: 100,
    bgColor: 'greenyellow',
  },
};

export const LowProgress = {
  args: {
    progressValue: 25,
    label: 'Low Progress',
    heading: 'Low Progress',
    min: 0,
    max: 100,
    bgColor: 'orange',
  },
};

export const HighProgress = {
  args: {
    progressValue: 90,
    label: 'High Progress',
    heading: 'High Progress',
    min: 0,
    max: 100,
    bgColor: 'green',
  },
};

export const Complete = {
  args: {
    progressValue: 100,
    label: 'Complete',
    heading: 'Upload Complete',
    min: 0,
    max: 100,
    bgColor: 'greenyellow',
  },
};
