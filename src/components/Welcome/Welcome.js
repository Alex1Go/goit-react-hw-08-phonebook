import PropTypes from 'prop-types';
import { Text } from './Welcome.styled';

export const Welcome = ({ title }) => {
  return <Text>{title}</Text>;
};

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};
