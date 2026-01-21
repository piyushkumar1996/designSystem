import React from 'react';
import ToastElement from './ToastElement';
import ToastWrapper from './ToastWrapper';

export default {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const ToastElementExample = {
  render: () => <ToastElement message="Success!!" />,
  parameters: {
    docs: {
      description: {
        story: 'Single toast element that auto-dismisses after 3 seconds.',
      },
    },
  },
};

export const ToastWrapperExample = {
  render: () => <ToastWrapper />,
  parameters: {
    docs: {
      description: {
        story: 'Toast wrapper that manages multiple toasts with a queue system. Maximum 3 toasts visible at once.',
      },
    },
  },
};
