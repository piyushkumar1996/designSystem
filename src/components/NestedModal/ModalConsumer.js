import React, { useContext } from "react";
import { ModalContainer, Modal, RenderModal } from ".";
import { modalContext } from "./context";

const ModalConsumer = () => {
  const { openModal } = useContext(modalContext);

  const handleClick = () => {
    const openModalC = () => {
      openModal({
        Component: Modal,
        props: {
          heading: "Modal C",
          body: (
            <div>
              <p>Content of Modal C</p>
            </div>
          ),
        },
      });
    };

    const addModalB = () => {
      openModal({
        Component: Modal,
        props: {
          heading: "Modal B",
          body: (
            <div>
              <p>Content of Modal B</p>
              <p>Content of Modal B</p>
              <p>Content of Modal B</p>
              <p>Content of Modal B</p>
              <button onClick={openModalC}>open Modal C</button>
            </div>
          ),
        },
      });
    };

    openModal({
      Component: Modal,
      props: {
        heading: "Modal A",
        body: (
          <div>
            <p>Content of Modal A</p>
            <p>Content of Modal A</p>
            <p>Content of Modal A</p>
            <p>Content of Modal A</p>
            <p>Content of Modal A</p>
            <p>Content of Modal A</p>
            <button onClick={addModalB}>open Modal B</button>
          </div>
        ),
      },
    });
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>open a Modal</button>
      </div>
      {RenderModal()}
    </div>
  );
};

export default ModalConsumer;
