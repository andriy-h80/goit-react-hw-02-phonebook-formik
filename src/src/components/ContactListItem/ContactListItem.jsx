import React from "react";
import PropTypes from 'prop-types';
import { ContactsListItemStyled, ContactName, ButtonDelete } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactsListItemStyled>
      <ContactName>
        {name}: {number}
      </ContactName>
      <ButtonDelete type="button" aria-label="delete" onClick={onDelete}>
        Delete
      </ButtonDelete>
    </ContactsListItemStyled>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
