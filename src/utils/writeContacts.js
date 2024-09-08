import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    if (!updatedContacts) {
      throw new Error('No contacts provided to write to the file.');
    }
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts were successfully written to the file.');
  } catch (error) {
    console.error('Error message: ', error);
  }
};
writeContacts();
