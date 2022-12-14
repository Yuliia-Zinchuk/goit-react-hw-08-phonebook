import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.inputForm}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.inputForm}>
        Email:
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="mail@example.com"
          autoComplete="username"
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
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className={css.btn}>Register</button>
    </form>
  );
};
