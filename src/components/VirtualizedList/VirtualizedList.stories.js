import React from 'react';
import VirtualizedList from './index';
import DynamicList from './DynamicList';

export default {
  title: 'Components/VirtualizedList',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const StaticHeight = {
  render: () => <VirtualizedList />,
  parameters: {
    docs: {
      description: {
        story: 'Virtualized list with static item height for efficient rendering of large lists.',
      },
    },
  },
};

export const DynamicHeight = {
  render: () => <DynamicList />,
  parameters: {
    docs: {
      description: {
        story: 'Virtualized list with dynamic item heights.',
      },
    },
  },
};
