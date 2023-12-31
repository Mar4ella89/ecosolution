import React, { useState } from 'react';
import { Link } from 'react-scroll';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import Container from 'components/Container/Container';

import DownIcon from 'images/icons/DownIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import faqData from './dataFAQ';

import style from './FAQ.module.scss';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = index => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Container>
      <section className={style.faq}>
        <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
        <div className={style.faqList}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${style.faqItem} ${
                index === openIndex ? 'style.open' : ''
              }`}
            >
              <HorizontLine />
              <div className={style.faqQuestionWrapper}>
                <FontAwesomeIcon
                  onClick={() => toggleQuestion(index)}
                  icon={index === openIndex ? faMinus : faPlus}
                  className={`${style.icon} ${
                    index === openIndex ? '' : style.iconPlus
                  }`}
                />

                <div
                  className={style.faqQuestion}
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}
                </div>
              </div>

              {index === openIndex && (
                <div className={style.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={style.faqFooter}>
          <p className={style.faqFooterText}>
            Didn't find the answer to your question?{' '}
          </p>
          <Link
            to="contactUs"
            smooth={true}
            duration={2000}
            offset={-130}
            className={style.contactButton}
          >
            <span className={style.contactButtonText}>Contact Us</span>
            <DownIcon color={'#173D33'} />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default FAQ;
