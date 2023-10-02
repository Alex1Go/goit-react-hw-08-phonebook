import { useAuth } from 'hooks/useAuth';
import { MainLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <MainLink to="/">HOME</MainLink>
      {isLoggedIn && <MainLink to="/contacts">Contacts</MainLink>}
    </nav>
  );
};
