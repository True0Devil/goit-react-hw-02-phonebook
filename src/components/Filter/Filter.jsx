import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <Input
      type="text"
      name="filter"
      onChange={onChange}
      placeholder="Search"
      value={filter}
    />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
