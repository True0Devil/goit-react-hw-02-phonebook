import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return (
    <Input type="text" name="filter" onChange={onChange} placeholder="Search" />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}