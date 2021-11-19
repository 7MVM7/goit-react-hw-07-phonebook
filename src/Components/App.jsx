import ContactsForm from "./ContactsForm/ContactsForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";


export default function App() {


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm/>

      <h2>Contacts</h2>
      <Filter />
      <ContactsList/>
    </div>
  );
}
