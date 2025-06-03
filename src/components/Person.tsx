import type { SingleContact } from '../App';

interface Props {
  contact: SingleContact;
}

const Person = ({ contact }: Props) => {
  return (
    <div className='card card-dash bg-base-100 w-full'>
      <div className='card-body'>
        <p className='text-2xl'>{contact.name}</p>
        <p className='text-xl'>{contact.city}</p>
        <div className='card-actions justify-end'>
          <button className='px-4 py-2 bg-gray-500 text-white rounded-md'>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Person;
