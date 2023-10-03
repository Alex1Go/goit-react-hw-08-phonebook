import { useAuth } from 'hooks/useAuth';
import { MainLink, TwoMainLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <MainLink to="/">HOME</MainLink>
      {isLoggedIn && <TwoMainLink to="/contacts">CONTACTS</TwoMainLink>}
    </nav>
  );
};
