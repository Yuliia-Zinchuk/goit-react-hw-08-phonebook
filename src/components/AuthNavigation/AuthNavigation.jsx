import { Link } from 'react-router-dom';
import css from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <ul className={css.linkList}>
      <li>
        <Link className={css.link} to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className={css.link} to="/login">
          Log in
        </Link>
      </li>
    </ul>
  );
};
