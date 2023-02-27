import React, { useState } from "react";
//import './contactform.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2cdf4020-b62f-11ed-aa6e-d1d3c574abee"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thanks for getting in touch!</h2>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    //   target="_blank"
    >
      <div>
        <input autoFocus type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;