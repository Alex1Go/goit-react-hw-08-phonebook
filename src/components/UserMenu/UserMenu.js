import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { Block, Button, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Block>
      <Text c>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Block>
  );
};
