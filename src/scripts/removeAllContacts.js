import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const existingContatcts = await readContacts();
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('All contacts were successfully removed from the file.');
  } catch (error) {
    console.error('Error message: ', error);
  }
};

removeAllContacts();
