const fs = require("fs");
const path = require("node:path");
const { v4: uuidv4 } = require("uuid");
const contactsPath = path.join(__dirname, "db", "contacts.json");

const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf8"));
// const contacts = fs.readFileSync(contactsPath, "utf8");

console.log(contacts);
function listContacts() {
  result = contacts.map((contact) => {
    return {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    };
  });
  console.table(result);
}

function getContactById(contactId) {
  for (const contact of contacts) {
    if (contact.id === contactId) {
      console.table([
        {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        },
      ]);
      return;
    }
  }
  console.log("Sorry we could find any contact with this ID");
}

function removeContact(contactId) {
  // ...twój kod
  return;
}

function addContact(name, email, phone) {
  // ...twój kod
  // wykorzystaj uuidv4

  const newContact = {
    id: 1,
    name,
    email,
    phone,
  };
  let data = [...contacts, newContact];

  fs.writeFile(contactsPath, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.error("Błąd przypisania kontaktów:", error);
      return;
    }
    console.log("Kontakt został dodany prawidłowo ;)");
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
