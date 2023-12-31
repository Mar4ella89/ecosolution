import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import { CloseIcon } from 'images/icons/userPageIcons';

import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleDownInEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleDownInEscape);
    return () => {
      return window.removeEventListener('keydown', handleDownInEscape);
    };
  }, [closeModal]);

  const handleDown = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleDown}>
      <div className={style.modal}>
        <button onClick={() => closeModal()} type="button">
          {/* <CloseIcon
            color={'#54ADFF'}
            className={style.modal__close}
            width="24"
            height="24"
          /> */}
        </button>
        <div className={style.modal__section}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
