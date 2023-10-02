import PropTypes from 'prop-types';

export const Welcome = ({ title }) => {
  return <h2>{title}</h2>;
};

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};
