import React from 'react';

import style from './ContactUs.module.scss';

const ContactsUs = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Contact us</h2>
      <ul>
        <li>
          <p>Phone:</p>
          <p>38 (098) 12 34 567</p>
          <p>38 (093) 12 34 567</p>
        </li>
        <li>
          <p>E-mail:</p>
          <p>office@ecosolution.com</p>
        </li>
        <li>
          <p>Address:</p>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        </li>
        <li>
          <p>Social Networks:</p>
        </li>
      </ul>
      <form>
        <p>* Full name:</p>
        <input />
        <p>* E-mail:</p>
        <input />
        <p>* Phone:</p>
        <input />
        <p>Message:</p>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactsUs;
