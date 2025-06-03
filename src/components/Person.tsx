import type { SingleContact } from '../App';

interface Props {
  contact: SingleContact;
}

const Person = ({ contact }: Props) => {
  return (
    <div className='card card-dash bg-base-100'>
      <div className='card-body'>
        <p className='text-2xl'>{contact.name}</p>
        <p className='text-xl'>{contact.city}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Person;
