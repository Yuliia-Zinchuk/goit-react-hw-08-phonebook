//import { Link } from 'react-router-dom';
import { StyledLink } from './AuthNavigation.styled';
import css from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <ul className={css.linkList}>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Login</StyledLink>
      </li>
    </ul>
  );
};
