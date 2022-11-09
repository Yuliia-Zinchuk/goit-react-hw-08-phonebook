import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';
import css from './HomePage.module.scss';
export const HomePage = () => {
  const userName = useSelector(selectName);
  return (
    <h1 className={css.titleHomePage}>{`Welcome in PhoneBook ${userName}`}</h1>
  );
};
