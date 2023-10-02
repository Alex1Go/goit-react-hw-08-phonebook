import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Label, LogLink, Form, Input, Btn } from './LoginForm.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' . For example: oleg@ukr.ua "
          placeholder="Enter email ..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          title="The password must contain at least 7 characters."
          placeholder="Enter password ..."
          required
        />
      </Label>
      <Btn type="submit">Log In</Btn>
      <LogLink to="/register">Don`t have acount? Register</LogLink>
    </Form>
  );
};
