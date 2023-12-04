import React from 'react';

import CallIcon from 'images/icons/CallIcon';
import MailIcon from 'images/icons/MailIcon';
import MapIcon from 'images/icons/MapIcon';
import FacebookIcon from 'images/icons/FacebookIcon';
import InstaIcon from 'images/icons/InstaIcon';

import Form from './Form/Form';

import style from './ContactUs.module.scss';

const onSubmit = (formData) => {
  console.log(formData);
};

const ContactsUs = () => {
  
  return (
    <section className={style.section}>
      <h2 className={style.title}>Contact us</h2>
      <div className={style.contactWrapper}>
        <ul className={style.list}>
          <li>
            <p className={style.subTitle}>Phone:</p>
            <a className={style.description} href="tel:+380981234567">
              <CallIcon />
              <p className={style.value}>38 (098) 12 34 567</p>
            </a>
            <a className={style.description} href="tel:+380931234567">
              <CallIcon />
              <p className={style.value}>38 (093) 12 34 567</p>
            </a>
          </li>
          <li>
            <p className={style.subTitle}>E-mail:</p>
            <a
              className={style.description}
              href="mailto:office@ecosolution.com"
            >
              <MailIcon />
              <p className={style.value}>office@ecosolution.com</p>
            </a>
          </li>
          <li>
            <p className={style.subTitle}>Address:</p>
            <a className={style.description} href='https://maps.app.goo.gl/kbe2x9QohcFLjuBX7'>
              <MapIcon className={style.icon}/>
              <p className={style.value}>
                79005, Ukraine, Lviv street Shota Rustaveli, 7
              </p>
            </a>
          </li>
          <li>
            <p className={style.subTitle}>Social Networks:</p>
            <div className={style.socialWrapper}>
            <a className={style.description} href='https://facebook.com/'><FacebookIcon/></a>
            <a className={style.description} href='https://www.instagram.com/'><InstaIcon className={style.iconSocial}/></a>
          </div></li>
        </ul>
        <Form onSubmit={onSubmit} />
        
      </div>
    </section>
  );
};

export default ContactsUs;
