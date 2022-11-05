import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

export const AppBar = () => {
  return (
    <>
      <Navigation />
      <UserAuthMenu />
      <AuthNavigation />
      {/* <h1>`Welcome ${userName}`</h1> */}
    </>
  );
};
