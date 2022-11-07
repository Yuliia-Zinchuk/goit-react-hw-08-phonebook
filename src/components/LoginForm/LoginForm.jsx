import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import css from './LoginForm.module.scss';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.inputForm}>
        Email:
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="mail@example.com"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={css.inputForm}>
        Password:
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className={css.btn}>Login</button>
    </form>
  );
};
