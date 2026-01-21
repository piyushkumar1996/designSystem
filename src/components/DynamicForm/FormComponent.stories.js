import React from 'react';
import FormComponent from './FormComponent';

export default {
  title: 'Components/DynamicForm',
  component: FormComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <FormComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Dynamic form component that renders form fields based on a schema configuration.',
      },
    },
  },
};
