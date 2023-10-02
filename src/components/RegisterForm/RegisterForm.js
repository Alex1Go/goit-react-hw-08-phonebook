import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Btn, Form, Input, Label, LogLink } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
        />
      </Label>
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
      <Btn type="submit">Register</Btn>
      <LogLink to="/login">Have acount? LogIn</LogLink>
    </Form>
  );
};
