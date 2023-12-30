import React, { useState, useRef, useEffect } from "react";

const RegModal = ({ isModalVisible, setIsModalVisible }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsModalVisible]);

  return (
    <>
      {isModalVisible && (
        <div
          className="modaLDA"
          ref={modalRef}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="MOdalLDcontetn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modalHeaderClose">
              <span onClick={() => setIsModalVisible(false)}>X</span>
            </div>

            <div className="hffV">
              <span>შესვლა</span>
            </div>

            <div className="imodalinput">
              <div className="dinELm">
                <span>ელ-ფოსტა</span>
              </div>
              <div className="inputmodaltxt">
                <input type="email" placeholder="Example@redberry.ge" />
              </div>
            </div>

            <button type="submit">შესვლა</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegModal;
