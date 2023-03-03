export const getAllContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedName = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedName);
  });

  return result;
};
