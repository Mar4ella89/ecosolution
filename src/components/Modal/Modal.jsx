import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { ReactComponent as CloseIcon } from 'images/svg/CloseIcon.svg';

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
        <button onClick={() => closeModal()} type="button" className={style.closeBtn}>
          <CloseIcon
            color={'#54ADFF'}
            className={style.icon}
            width="9"
            height="9"
          />
          <span className={style.text}>close</span>
        </button>
        <div className={style.modal__section}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
