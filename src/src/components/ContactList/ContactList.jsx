import React from "react";
import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContacts(id)}
         >
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
