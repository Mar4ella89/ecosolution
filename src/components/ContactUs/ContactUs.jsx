import React from 'react';

import Container from 'components/Container/Container';
import Social from 'components/Social/Social';

import CallIcon from 'images/icons/CallIcon';
import MailIcon from 'images/icons/MailIcon';
import MapIcon from 'images/icons/MapIcon';
import Form from './Form/Form';

import style from './ContactUs.module.scss';

const onSubmit = formData => {
  return formData;
};

const ContactsUs = () => {
  return (
    <Container>
      <section className={style.section} id="contactUs">
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
              <a
                className={style.description}
                href="https://maps.app.goo.gl/kbe2x9QohcFLjuBX7"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <MapIcon className={style.icon} />
                <p className={style.value}>
                  79005, Ukraine, Lviv street Shota Rustaveli, 7
                </p>
              </a>
            </li>
            <li>
              <p className={style.subTitle}>Social Networks:</p>
              <Social />
            </li>
          </ul>
          <Form onSubmit={onSubmit} />
        </div>
      </section>
    </Container>
  );
};

export default ContactsUs;
