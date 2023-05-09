import PropTypes from 'prop-types';
import { FormStyled, Input, ButtonAdd } from './ContactForm.styled';
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const ContactForm = ({onSubmit}) => {
    const initialValues = {
        name: '',
        number: '',
    }

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        number: Yup.string().required(),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}>
            <Form>
                <FormStyled>
                    <label htmlFor="name">
                    Name:  
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                    />
                    <ErrorMessage name="name" />
                    </label>

                    <label htmlFor="number">
                    Number:   
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
                    />
                    <ErrorMessage name="number" />  
                    </label>

                    <ButtonAdd type='submit' aria-label="Add contact">Add contact</ButtonAdd>          
                </FormStyled>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
export default ContactForm;
