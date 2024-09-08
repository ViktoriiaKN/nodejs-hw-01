import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      throw new Error('Data in the file is not an array.');
    }
    return contacts.length;
  } catch (error) {
    console.error('Error message: ', error);
  }
};
countContacts().then((count) => {
  console.log(`Number of contacts: ${count}`);
});
