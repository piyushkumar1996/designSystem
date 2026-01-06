import React, { useContext, useEffect, useRef } from "react";
import ModalProvider, { modalContext } from "./context";
import "./modal.css";

export const ModalContainer = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export const RenderModal = () => {
  const { modals, closeModal } = useContext(modalContext);
  const modalListRef = useRef([]);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      const currentModal =
        modalListRef.current[modalListRef.current.length - 1];
      const focusableSelector = ["button"];
      const elements = currentModal.querySelectorAll(
        focusableSelector.join(",")
      );
      const focusArray = Array.from(elements);

      if (!focusArray.length) return;

      const first = focusArray[0];
      const last = focusArray[focusArray.length - 1];
      const active = document.activeElement;

      if (active == last && !e.shiftKey) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    }
  };

  useEffect(() => {
    if (modals.length) window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (modals.length) window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modals.length]);

  useEffect(() => {
    if (modals.length > 0) {
      // Focus the topmost remaining modal
      const topModal = modalListRef.current[modals.length - 1];
      const focusable = topModal?.querySelector("button");
      focusable?.focus();
    }
  }, [modals]);

  if (!modals.length) return null;

  return (
    <div>
      {modals.map(({ Component, props, id }, i) => (
        <div
          onClick={closeModal}
          key={id}
          className="modal_overlay"
          style={{ zIndex: 1000 + i }}
        >
          <div
            role="dialog"
            aria-label={props.heading}
            ref={(el) => {
              if (el) modalListRef.current[i] = el;
              else modalListRef.current.splice(i, 1); // clean up when unmounted
            }}
            className="modal_body"
            onClick={(e) => e.stopPropagation()}
          >
            <Component id={id} {...props} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Modal = ({ heading, body }) => {
  const { closeModal } = useContext(modalContext);

  return (
    <div>
      <button aria-label="close modal" onClick={closeModal}>
        X
      </button>
      <h1>{heading}</h1>
      {body}
    </div>
  );
};
