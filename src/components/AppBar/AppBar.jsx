import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

import css from './AppBar.module.scss';
export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header className={css.header}>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </header>
  );
};
