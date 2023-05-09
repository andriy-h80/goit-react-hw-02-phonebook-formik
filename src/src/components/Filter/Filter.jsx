import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <label htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
