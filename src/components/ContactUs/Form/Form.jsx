import React, { useState, useEffect } from "react";

import RightIcon from 'images/icons/RightIcon';

import style from './Form.module.scss';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.fullName === "") {
      alert("Full name field is required");
      return;
    }
    if (formData.email === "") {
      alert("E-mail field is required");
      return;
    }
    if (formData.phone === "") {
      alert("Phone field is required");
      return;
    }

    onSubmit(formData);
  };

  useEffect(() => {
   
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
        <label>
      <p className={style.label}>* Full name:</p>
      <input className={style.input}
        type="text"
        name="fullName"
        placeholder="John Rosie"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      </label>
      <label>
      <p className={style.label}>* E-mail:</p>
      <input className={style.input}
        type="email"
        name="email"
        placeholder="johnrosie@gmail.com"
        value={formData.email}
        onChange={handleInputChange}
      />
      </label>
      <label>
      <p className={style.label}>* Phone:</p>
      <input className={style.input}
        type="tel"
        name="phone"
        placeholder="380961234567"
        value={formData.phone}
        onChange={handleInputChange}
      />
      </label>
      <label>
      <p className={style.label}>Message:</p>
      <textarea className={style.textarea}
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleInputChange}
      />
      </label>
      
      <button className={style.button} type="submit">
            <span className={style.buttonText}>Send</span>
            <RightIcon fill={'#97D28B'}/>
          </button>
    </form>
  );
};

export default Form;