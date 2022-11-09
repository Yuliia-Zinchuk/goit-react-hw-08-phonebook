import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import css from './UserAuthMenu.module.scss';
export const UserAuthMenu = () => {
  const dispath = useDispatch();

  const userEmail = useSelector(selectEmail);
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.userEmail}>{userEmail}</p>
        <button className={css.btn} onClick={() => dispath(logout())}>
          Logout
        </button>
      </div>
    </>
  );
};
