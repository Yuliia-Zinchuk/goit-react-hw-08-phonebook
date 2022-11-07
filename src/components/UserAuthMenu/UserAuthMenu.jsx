import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import css from './UserAuthMenu.module.css';
export const UserAuthMenu = () => {
  const dispath = useDispatch();
  const userName = useSelector(selectName);
  // console.log(userName);
  return (
    <>
      <div className={css.wrapper}>
        {/* <p>Welcome {userName}!</p> так я писала, а второй вариант от Алены через шаблонку*/}
        <p className={css.userWelcome}>{`Welcome ${userName}!`}</p>
        <button className={css.btn} onClick={() => dispath(logout())}>
          Logout
        </button>
      </div>
    </>
  );
};
