import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = (await readContacts()) || [];
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updateContacts = [...existingContacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(
      `${number} new contacts were successfully generated and added to the file.`,
    );
  } catch (error) {
    console.error('Error message: ', error);
  }
};

generateContacts(5);
