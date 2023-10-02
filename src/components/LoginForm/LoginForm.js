import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          type="email"
          name="email"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' . For example: oleg@ukr.ua "
          placeholder="Enter email ..."
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          title="The password must contain at least 7 characters."
          placeholder="Enter password ..."
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
