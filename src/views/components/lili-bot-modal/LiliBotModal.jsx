import { Modal, ModalBody, ModalHeader } from "reactstrap";

const LiliBotModal = () => {
  <div
    style={{
      zIndex: 999,
      width: 60,
      height: 60,
      backgroundColor: "blue",
      position: "fixed",
      bottom: 50,
      right: 50,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <g fill="none" fill-rule="evenodd">
        <path
          stroke="white"
          strokeLinecap="round"
          d="M7.707 22.293A1 1 0 0 1 6 21.586V20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-2.293 2.293z"
        />
        <path stroke="white" strokeLinecap="square" d="M12.5 6.5v-1" />
        <circle cx="8.5" cy="13.5" r="1.5" fill="white" />
        <circle cx="16.5" cy="13.5" r="1.5" fill="white" />
        <circle cx="12.5" cy="3.5" r="1.5" stroke="white" />
        <rect width="4" height="1" x="10.5" y="17.5" stroke="white" rx=".5" />
        <path
          stroke="white"
          strokeLinecap="round"
          d="M8 17c-1.657 0-3-1.567-3-3.5S6.343 10 8 10h9c1.657 0 3 1.567 3 3.5S18.657 17 17 17"
        />
      </g>
    </svg>
    <Modal isOpen>
      <ModalHeader>Chatbot</ModalHeader>
      <ModalBody>Hi</ModalBody>
    </Modal>
  </div>;
};
export default LiliBotModal;
