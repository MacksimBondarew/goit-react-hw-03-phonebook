import { Component } from 'react';
import {
    ContactForm,
    NameInput,
    NumberInput,
    AddContactButton,
    LabelName,
    LabelPhone,
} from './NameEditor.styled';
import PropTypes from 'prop-types';
class NameEditor extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    removeNonDigits(str) {
        return str.replace(/\D/g, '');
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit, people } = this.props;

        const nameFound = people.find(
            people =>
                people.name.toLowerCase() === this.state.name.toLowerCase() ||
                this.removeNonDigits(people.number) ===
                    this.removeNonDigits(this.state.number)
        );

        if (nameFound) {
            alert(
                `${this.state.name} and phone number ${this.state.number} is already in contacts`
            );
            return;
        }
        onSubmit(this.state.name, this.state.number);
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <ContactForm onSubmit={this.handleSubmit}>
                <LabelName htmlFor="name">Name:</LabelName>
                <NameInput
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <LabelPhone htmlFor="number">Phone Number:</LabelPhone>
                <NumberInput
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <AddContactButton type="submit">add Contact</AddContactButton>
            </ContactForm>
        );
    }
}

NameEditor.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired,
};

export default NameEditor;
