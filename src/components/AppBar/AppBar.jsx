import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
//import { selectName } from 'redux/auth/auth-selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
//import isLoggedIn from '../../redux/auth/auth-slice.reducer';
//import token from '../../redux/auth/auth-slice';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Navigation />

      {token ? <UserAuthMenu /> : <AuthNavigation />}
      {/* <h1>`Welcome ${userName}`</h1> */}
    </>
  );
};
