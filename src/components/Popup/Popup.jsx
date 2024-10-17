import React, { useEffect, useState } from "react";
import "./Popup.css";

const Popup = ({ content, close, setdatacallback }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (data, bool) => {
    // console.log(data);

    setIsModalOpen(false);
    close(data, bool);
  };
  useEffect(() => {
    // openModal();
  }, []);

  //   openModal();
  return (
    <div onClick={() => closeModal(false)} className="PopUp_parent">
      <div onClick={(e) => e.stopPropagation()} className="PopUp_background">
        {React.cloneElement(content, { closeModal, setdatacallback })}
      </div>
    </div>
  );
};

export default Popup;
