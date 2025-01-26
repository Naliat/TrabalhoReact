import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 20px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;

    input, textarea {
      width: 80%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }

    button {
      background-color: #333;
      padding: 10px 20px;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #555;
      }
    }
  }

  .success-message {
    color: green;
    margin-top: 10px;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para um backend ou serviço de email
    console.log('Dados enviados:', formData);
    setSuccess(true);
  };

  return (
    <ContactWrapper>
      <h1>Contato</h1>
      <p>Se você tiver alguma dúvida, não hesite em nos contatar.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Sua Mensagem" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {success && <p className="success-message">Mensagem enviada com sucesso!</p>}
    </ContactWrapper>
  );
}

export default Contact;
