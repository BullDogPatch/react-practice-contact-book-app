import { useState } from 'react';
import type { SingleContact } from '../App';

interface Props {
  contact: SingleContact;
  handleDelete: (id: number) => void;
  handleSave: (contact: SingleContact) => void;
}

const Person = ({ contact, handleDelete, handleSave }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedCity, setEditedCity] = useState(contact.city);

  return (
    <div className='card card-dash bg-base-100 w-full'>
      <div className='card-body'>
        {isEditMode ? (
          <input
            type='text'
            className='input'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <p className='text-2xl'>{contact.name}</p>
        )}
        {isEditMode ? (
          <input
            type='text'
            className='input'
            value={editedCity}
            onChange={(e) => setEditedCity(e.target.value)}
          />
        ) : (
          <p className='text-xl'>{contact.city}</p>
        )}

        <div
          className={`card-actions flex items-center ${
            isEditMode ? 'justify-between' : 'justify-end'
          }`}
        >
          {isEditMode ? (
            <>
              <div>
                <button
                  className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
              <div>
                <button
                  onClick={() => setIsEditMode(false)}
                  className='px-3 py-2 bg-gray-600 text-white rounded-md cursor-pointer mr-2'
                >
                  Cancel
                </button>
                <button
                  className='px-3 py-2 bg-green-500 text-white rounded-md cursor-pointer'
                  onClick={() => {
                    handleSave({
                      id: contact.id,
                      name: editedName,
                      city: editedCity,
                    });
                    setIsEditMode(false);
                  }}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <button
              className='px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer'
              onClick={() => setIsEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Person;
