import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0fr0gdj',
        'template_r4vw5am',
        form.current,
        'uZp98tcUkg5jJj1zP'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      Contact
      <img
        className='menuicon'
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onClick={() => {
          props.setNavbarOpen(!props.navbarOpen);
          props.onLeave();
        }}
      />
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='user_name' required />
          <label>Email</label>
          <input type='email' name='user_email' required />
          <label>Message</label>
          <textarea name='message' required />
          <input type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
}
