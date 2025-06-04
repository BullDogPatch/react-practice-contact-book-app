import { useState, type FormEvent } from 'react';
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
  const [name, setName] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleAddContact = (e: FormEvent) => {
    e.preventDefault();
    if (!name.length || !city.length) return;
    const newPerson = { id: contacts.length + 1, name, city };
    setContacts((prev) => [...prev, newPerson]);
    setName('');
    setCity('');
  };

  const handleDelete = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className='max-w-6xl mx-auto px-4'>
      <h2 className='text-left text-3xl font-bold'>Contact Book</h2>
      <p className='text-left'>Keep track of your friends live.</p>
      <form className='flex gap-3 mt-2' onSubmit={handleAddContact}>
        <input
          type='text'
          className='input'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='input'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type='submit'
          className='px-4 rounded-md cursor-pointer bg-blue-800'
        >
          Add Contact
        </button>
      </form>
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {contacts.map((contact) => (
          <Person
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
