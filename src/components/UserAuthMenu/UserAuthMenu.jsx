import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
export const UserAuthMenu = () => {
  const dispath = useDispatch();
  const userName = useSelector(selectName);
  console.log(userName);
  return (
    <>
      {/* <p>Welcome {userName}!</p> так я писала, а второй вариант от Алены через шаблонку*/}
      <p>{`Welcome ${userName}!`}</p>
      <button onClick={() => dispath(logout())}>Logout</button>
    </>
  );
};
