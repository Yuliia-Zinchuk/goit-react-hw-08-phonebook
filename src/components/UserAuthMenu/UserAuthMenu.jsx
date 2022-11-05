import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
export const UserAuthMenu = () => {
  const dispath = useDispatch();
  return (
    <>
      <p>Welcome!</p>
      <button onClick={() => dispath(logout())}>Logout</button>
    </>
  );
};
