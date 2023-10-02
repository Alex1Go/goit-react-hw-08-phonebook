import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
