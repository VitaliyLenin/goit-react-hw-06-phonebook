import { useSelector, useDispatch } from 'react-redux';

import MyContactForm from 'components/MyContactForm/MyContactForm';
import MyContactList from 'components/ContactList/ContactList';
import MyContactsFilter from 'components/MyContactsFilter/MyContactsFilter';

import { addContact, removeContact } from 'Redux/Contacts/contacts-slice';
import { setFilter } from 'Redux/Filter/filter-slice';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
import { getFilter } from 'Redux/Filter/filter-selectors';

import css from './MyContacts.module.css';

const MyContacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
  };

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <MyContactForm onSubmit={handleAddContact} />
      <MyContactsFilter handleChange={handleFilter} value={filter} />
      <h2 className={css.title}>Contacts</h2>
      <MyContactList removeContact={handleRemoveContact} contacts={contacts} />
    </div>
  );
};

export default MyContacts;
