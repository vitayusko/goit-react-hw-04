import React from "react";
import s from "./ImageModal.module.css";

const ImageModal = ({ children, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export default ImageModal;
