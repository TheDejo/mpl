import React, {useState} from 'react';
import styled from 'styled-components';
import {db} from '../firebase';

const ContactForm = styled.div`
  height: 100vh;
  background: #fff;
  padding: 70px 0;

  h1 {
    text-align:center;
    color: #121212;
  }

  .border {
    width: 100px;
    height: 10px;
    background: #227093;
    margin: 20px auto;
  }
`;
const Form = styled.form`
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
  overflow: hidden;

  button {
    float: right;
    border: 0;
    background: #227093;
    color: #fff;
    padding: 12px 50px;
    cursor: pointer;
    outline: none;
    transition: 0.5s;

    &:hover{
      background: #34ace0;
    }
  }
`;
const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 16px 0;
  border: 0;
  background: #111;
  padding: 20px 40px;
  outline: none;
  color: #ddd;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 2px 2px #fed330;
  }
`;
const Textarea = styled.textarea`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0;
    border: 0;
    background: #111;
    padding: 20px 40px;
    outline: none;
    color: #ddd;
    transition: 0.5s;
    height: 120px;
    resize: none;

  &:hover {
      box-shadow: 0 0 2px 2px #fed330;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const[loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)

    db.collection('contacts').add({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then (() => {
      alert("Message has been submitted :)");
      setLoader(false);
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };



  return (
    <>
      <ContactForm>
        <h1>Contact us</h1>
        <div className="border"></div>
        <Form onSubmit={handleSubmit}>
          <Input  placeholder="name" value={name} onChange= {(e) => setName(e.target.value)} />
          <Input type="email " placeholder="email" value={email} onChange= {(e) => setEmail(e.target.value)} />
          <Input  placeholder="phone" value={phone} onChange= {(e) => setPhone(e.target.value)} />
          <Textarea placeholder="message" value={message} onChange= {(e) => setMessage(e.target.value)} />
          <button type="submit" style={{
            background: loader ? "#ccc" : "#227093"
          }}>Submit</button>
        </Form>
      </ContactForm>
    </>
  );
};

export default Contact;