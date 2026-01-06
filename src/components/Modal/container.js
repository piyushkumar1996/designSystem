import React, { useEffect, useRef, useState } from "react";
import "./modal.css";

export const Modal = ({ isOpen, setIsOpen, children }) => {
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (modalRef.current.contains(e.target)) return;
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal_container" onClick={handleClick}>
      <div ref={modalRef} className="modal_body">
        <button className="cross_button" onClick={() => setIsOpen(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Modal2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open modal 2</button>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <div>This is 2nd modal body</div>
        <button>Cancel</button>
      </Modal>
    </>
  );
};

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <Modal2 />
        <div>Modal body</div>
        <p>Content of the parent modal to test stacking</p>
        <button>Cancel</button>
      </Modal>
    </>
  );
};

export default ModalContainer;
