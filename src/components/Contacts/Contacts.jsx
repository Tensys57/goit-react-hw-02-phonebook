import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h3 className={css.title}>Contacts</h3>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className={css.deleteBtn}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
