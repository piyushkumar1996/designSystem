import React from 'react';
import Todo from './Todo';

export default {
  title: 'Components/TodoApp',
  component: Todo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <Todo />,
  parameters: {
    docs: {
      description: {
        story: 'Todo application with filtering, adding, editing, and deleting todos. Data persists in localStorage.',
      },
    },
  },
};
