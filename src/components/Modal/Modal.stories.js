import React, { useState } from 'react';
import { Modal } from './container';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2>Modal Title</h2>
          <p>This is the modal content. Click outside or press Escape to close.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      </>
    );
  },
};

export const WithContent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal with Content</button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2>Modal with Rich Content</h2>
          <p>This modal contains more content to demonstrate scrolling behavior.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      </>
    );
  },
};
