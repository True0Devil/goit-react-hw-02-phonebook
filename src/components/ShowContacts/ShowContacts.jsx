import { List, Item, Button } from './ShowContacts.styled';
import PropTypes from 'prop-types';
import { exact } from 'prop-types';

export const ShowContacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ShowContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
