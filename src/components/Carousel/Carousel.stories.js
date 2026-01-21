import React from 'react';
import Carousel from './index';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <Carousel />,
};

export const AutoPlay = {
  render: () => <Carousel />,
  parameters: {
    docs: {
      description: {
        story: 'Carousel with auto-play functionality. Hover to pause.',
      },
    },
  },
};
