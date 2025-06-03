import { useState } from 'react';
import './App.css';
import Person from './components/Person';

export interface SingleContact {
  id: number;
  name: string;
  city: string;
}

const initialContacts = [
  { id: 1, name: 'Alice Johnson', city: 'New York' },
  { id: 2, name: 'Bob Smith', city: 'Los Angeles' },
  { id: 3, name: 'Charlie Brown', city: 'Chicago' },
  { id: 4, name: 'David Williams', city: 'Houston' },
  { id: 5, name: 'Emma Davis', city: 'Phoenix' },
  { id: 6, name: 'Frank Miller', city: 'Philadelphia' },
  { id: 7, name: 'Grace Wilson', city: 'San Antonio' },
  { id: 8, name: 'Henry Moore', city: 'San Diego' },
  { id: 9, name: 'Isabella Garcia', city: 'Dallas' },
  { id: 10, name: 'Jack Martinez', city: 'San Jose' },
];

function App() {
  const [contacts, setContacts] = useState<SingleContact[]>(initialContacts);

  return (
    <>
      {contacts.map((contact) => (
        <Person key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default App;
