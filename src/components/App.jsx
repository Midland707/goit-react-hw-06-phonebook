import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from './App.module.css';

export function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(selectContacts);
  console.log('contacts', contacts);
  // useEffect(() => {
  //   const contactsStorage = localStorage.getItem('contactsStorage');
  //   const parsedContacts = JSON.parse(contactsStorage);
  //   if (parsedContacts.length > 0) setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  // }, [contacts]);

  // const onSubmitForm = (data, resetForm) => {
  //   const { name } = data;
  //   const alertState = contacts.find(contact => contact.name === name);
  //   if (!alertState) {
  //     setContacts(prevContacts => [...prevContacts, data]);
  //     resetForm.reset();
  //   } else alert(`${name} is already in contacts`);
  // };

  // const onFilterByName = eventFilter => {
  //   return eventFilter.target.value.toLowerCase().trim();
  // };

  // const onClickDelete = idDelete => {
  //   setContacts(contacts.filter(contact => contact.id !== idDelete));
  // };

  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(filter)
  // );
  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      {contacts.length === 0 ? (
        <div>Contacts list is empty ... </div>
      ) : (
        <>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
