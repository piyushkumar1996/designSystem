import React from 'react';
import { ModalContainer, Modal, RenderModal } from './index';
import ModalConsumer from './ModalConsumer';
import { modalContext } from './context';

export default {
  title: 'Components/NestedModal',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => (
    <ModalContainer>
      <ModalConsumer />
      <RenderModal />
    </ModalContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nested modal system that supports multiple modals stacked on top of each other. Open Modal A, then Modal B, then Modal C to see nesting.',
      },
    },
  },
};

export const SimpleModal = {
  render: () => {
    const SimpleModalExample = () => {
      const { openModal } = React.useContext(modalContext);
      
      return (
        <ModalContainer>
          <button onClick={() => openModal({
            Component: Modal,
            props: {
              heading: 'Simple Modal',
              body: <p>This is a simple modal example.</p>
            }
          })}>
            Open Simple Modal
          </button>
          <RenderModal />
        </ModalContainer>
      );
    };
    return <SimpleModalExample />;
  },
};
