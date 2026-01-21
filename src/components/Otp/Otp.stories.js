import React from 'react';
import OtpContainer from './index';

export default {
  title: 'Components/OTP',
  component: OtpContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <OtpContainer />,
  parameters: {
    docs: {
      description: {
        story: 'OTP input component with 4 digits. Submit to validate.',
      },
    },
  },
};
