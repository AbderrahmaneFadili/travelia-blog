import React from "react";
import Modal from "react-modal";
import { TiDeleteOutline } from "react-icons/ti";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

Modal.setAppElement("#root");

function ModalMessage({ modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <TiDeleteOutline
        onClick={closeModal}
        className="self-end text-4xl cursor-pointer my-3"
      />

      <h1 className="text-center text-xl">
        Do you want to remove your account?
      </h1>

      <button
        className="bg-red-700 text-white px-9 py-3 mt-5"
        onClick={closeModal}
      >
        Ok
      </button>
    </Modal>
  );
}

export default ModalMessage;
