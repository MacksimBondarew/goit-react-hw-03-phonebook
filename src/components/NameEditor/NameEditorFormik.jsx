import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactButton, LabelName, LabelPhone } from './NameEditor.styled';
import styled from 'styled-components';
import { object, string, number } from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Error = styled.div`
    background-color: #ff6b6b;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

const ErrorIcon = styled.span`
    font-size: 20px;
    margin-right: 10px;
`;

const ErroText = styled.span`
    font-size: 16px;
`;
const FormFormik = styled(Form)`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

const Input = styled(Field)`
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: #0088cc;
    }

    &:invalid {
        border-color: #e74c3c;
    }
`;

const schema = object({
    name: string().required(),
    number: number().required(),
});

const initiaValues = {
    name: '',
    number: '',
};

const NameEditorForm = ({onSubmit, people}) => {
    const handleSubmit = ( values, { resetForm }) => {

        const nameFound = people.find(
            people =>
                people.name.toLowerCase() === values.name.toLowerCase() ||
                people.number.replace(/\D/g, '') ===
                    values.number.replace(/\D/g, '')
        );

        if (nameFound) {
            alert(
                `${values.name} and phone number ${values.number} is already in contacts`
            );
            return;
        }
        onSubmit(values.name, values.number);
        resetForm();
    };
    return (
        <Formik
            initialValues={initiaValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <FormFormik autoComplete="off" >
                <LabelName htmlFor="name">Name</LabelName>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <ErrorMessage key={nanoid()} name="name">
                    {msg => (
                        <Error>
                            <ErrorIcon>⚠️</ErrorIcon>
                            <ErroText>{msg}</ErroText>
                        </Error>
                    )}
                </ErrorMessage>
                <LabelPhone htmlFor="number">Phone Number</LabelPhone>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <ErrorMessage key={nanoid()} name="number">
                    {msg => (
                        <Error>
                            <ErrorIcon>⚠️</ErrorIcon>
                            <ErroText>{msg}</ErroText>
                        </Error>
                    )}
                </ErrorMessage>
                <AddContactButton type="submit">add Contact</AddContactButton>
            </FormFormik>
        </Formik>
    );
};

NameEditorForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired,
};

export default NameEditorForm;
