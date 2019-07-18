import React from 'react';
import PropTypes from 'prop-types';

const ContactsItem = ({ contact }) => {
  const { id, name, phone, type, email } = contact;
  console.log(type);
  return (
    <div className='card bg-light'>
      <h3 className='primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn-dark btn-sm'>Edit</button>
        <button className='btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactsItem;
