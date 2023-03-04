import MyContactForm from 'components/MyContactForm/MyContactForm';
import MyContactList from 'components/ContactList/ContactList';
import MyContactsFilter from 'components/MyContactsFilter/MyContactsFilter';

import css from './MyContacts.module.css';

const MyContacts = () => {
  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <MyContactForm />
      <MyContactsFilter />
      <h2 className={css.title}>Contacts</h2>
      <MyContactList />
    </div>
  );
};

export default MyContacts;
