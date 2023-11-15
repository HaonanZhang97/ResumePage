import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();
  const [sentEmail, setSentEmail] = useState(true);
  const [show, setShow] = useState(true);

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
          setSentEmail(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact'>
      <h1
        className='pageTopic'
        onMouseEnter={props.onEnter}
        onMouseLeave={props.onLeave}
      >
        Contact
      </h1>
      <hr />
      <img
        className='menuicon'
        src='./ResumePage/images/menu.svg'
        alt='menu'
        onMouseEnter={props.onMenu}
        onMouseLeave={props.onLeave}
        onClick={() => {
          props.setNavbarOpen(!props.navbarOpen);
          props.onLeave();
        }}
      />
      <p
        className='contactInfo'
        onMouseEnter={props.onEnter}
        onMouseLeave={props.onLeave}
      >
        Tel: +1 6132522649
      </p>
      <p
        className='contactInfo'
        onMouseEnter={props.onEnter}
        onMouseLeave={props.onLeave}
      >
        Email: raymondzhn@outlook.com
      </p>
      {show ? (
        <button
          onMouseEnter={props.onButton}
          onMouseLeave={props.onLeave}
          className='submitButton show'
          onClick={() => {
            setShow(false);
          }}
        >
          Want to leave me a message?
        </button>
      ) : sentEmail ? (
        <div>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <label onMouseEnter={props.onButton} onMouseLeave={props.onLeave}>
              Name
            </label>
            <input type='text' name='user_name' required />
            <label onMouseEnter={props.onButton} onMouseLeave={props.onLeave}>
              Email
            </label>
            <input type='email' name='user_email' required />
            <label onMouseEnter={props.onButton} onMouseLeave={props.onLeave}>
              Message
            </label>
            <textarea name='message' required />
            <button
              className='submitButton'
              type='submit'
              onMouseEnter={props.onButton}
              onMouseLeave={props.onLeave}
            >
              send
            </button>
          </form>
        </div>
      ) : (
        <div
          className='sentForm'
          onMouseEnter={props.onEnter}
          onMouseLeave={props.onLeave}
        >
          <h2> Thank you for your email!</h2>
          <h3>
            I will get back to you ASAP!
            <img src='./ResumePage/images/smile.svg' alt='smile emoji' />
          </h3>
        </div>
      )}
    </div>
  );
}
