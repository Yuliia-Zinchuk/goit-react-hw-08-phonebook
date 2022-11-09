import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';

import css from './Modal.module.scss';

export const Modal = ({ closeModal, contact }) => {
  useEffect(() => {
    const closeByEscape = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [closeModal]);

  const closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={closeByBackdrop}>
      <div className={css.Modal}></div>
      <UpdateContactForm contact={contact} closeModal={closeModal} />
    </div>
  );
};

Modal.propTypes = {
  contact: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
