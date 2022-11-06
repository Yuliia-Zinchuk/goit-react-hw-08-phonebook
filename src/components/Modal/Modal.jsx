import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';

import css from './Moda.module.css';

export const Modal = ({ closeModal, contact }) => {
  const [loaded, setLoaded] = useState(false);
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
  const loadHandler = () => {
    setLoaded(true);
  };
  return (
    <div className={css.Overlay} onClick={closeByBackdrop}>
      <div className={css.Modal}></div>
      <UpdateContactForm contact={contact} closeModal={closeModal} />
    </div>
  );
};

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
//   src: PropTypes.object.isRequired,
// };

//onSubmit = { onUpdateContact };
