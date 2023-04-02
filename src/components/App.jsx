import { Component } from 'react';
import { nanoid } from 'nanoid';
import NameEditor from './NameEditor';
import NameList from './NameList';
import FilterName from './FilterName';
import { PhoneBook, TitleContacts, MainTitlePhoneBook } from './App.styled';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    addName = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parseContacts = JSON.parse(contacts);

        if (parseContacts) {
            this.setState({ contacts: parseContacts });
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts)
            );
        }
    }

    getVisibleName = () => {
        const { filter, contacts } = this.state;
        const normalizedName = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedName)
        );
    };

    deleteName = nameId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(name => name.id !== nameId),
        }));
    };
    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    render() {
        const { filter, contacts } = this.state;

        return (
            <PhoneBook>
                <MainTitlePhoneBook>Phonebook</MainTitlePhoneBook>
                <NameEditor onSubmit={this.addName} people={contacts} />

                <TitleContacts>Contacts</TitleContacts>
                <FilterName value={filter} onChange={this.changeFilter} />
                <NameList
                    contacts={this.getVisibleName()}
                    deleteName={this.deleteName}
                />
            </PhoneBook>
        );
    }
}

export default App;
