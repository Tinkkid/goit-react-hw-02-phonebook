import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
      return (
        <li key={id}>
          <p>{name} :</p> <p>{number}</p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      )
    })}
    </ul>
  )
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
