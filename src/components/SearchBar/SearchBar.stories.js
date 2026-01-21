import React from 'react';
import SearchBar from './index';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <SearchBar />,
  parameters: {
    docs: {
      description: {
        story: 'Search bar with debounced search and filter list. Type to search through items.',
      },
    },
  },
};
