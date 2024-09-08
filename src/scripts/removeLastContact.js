import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContats = await readContacts();
    if (existingContats.length === 0) {
      console.log('No contacts to remove.');
      return;
    }
    existingContats.pop();
    await writeContacts(existingContats);
    console.log('Last contact was successfully removed from the file.');
  } catch (error) {
    console.error('Error message: ', error);
  }
};

removeLastContact();
