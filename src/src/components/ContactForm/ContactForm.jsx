import PropTypes from 'prop-types';
import { Form, ButtonAdd } from './ContactForm.styled';

const ContactForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            <label htmlFor="name">
                Name: 
            </label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            id="name"
            />

            <label htmlFor="number">
                Number: 
            </label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
            id="number"
            />  

            <ButtonAdd type='submit' aria-label="Add contact">Add contact</ButtonAdd>          
        </Form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
export default ContactForm;
