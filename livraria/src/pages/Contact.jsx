import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body-contact{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

}

section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 35px;
    background: #333;
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 15px;
}

section h1{
    color: #f5f5f5;
    margin: 2mm;
}

section p{
    color: #f5f5f5;
    margin: 2mm;
}

c {
    font-size: 25px;
    margin-right: 10px;
    margin: 2mm;
}

i {
    color: #f5f5f5;
    margin-right: 5px;
    font-size: 20px;
}

section form{
    display: flex;
    flex-direction: column;
    width: 100%;
}

form label{
    color: #f5f5f5;
    margin-bottom: 4px;
}

form input{
    padding: 8px;
    outline: none;
    border: 0;
    border-radius: 15px;
    margin-bottom: 20px;
    transition: all 0.5s;
}

form textarea{
    padding: 10px;
    outline: none;
    border: 0;
    border-radius: 15px;
    resize: none;
}

form button{
    padding: 10px;
    font-size: 15px;
    background:rgb(146, 146, 146);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
}

.success-message{
    color:rgb(70, 252, 88);
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
      <body className="body-contact">
      <section>
      <h1><c class="ri-customer-service-2-fill"></c>Contato</h1>
      <p>Se você tiver alguma dúvida, não hesite em nos contatar.</p>
      <form onSubmit={handleSubmit}>
        <label><i class="ri-user-line"></i>Nome</label>
        <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
        <label><i class="ri-mail-line"></i>Email</label>
        <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
        <label><i class="ri-chat-2-line"></i>Mensagem</label>
        <textarea name="message" placeholder="Sua Mensagem" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {success && <p className="success-message">Mensagem enviada com sucesso!</p>}
      </section>
      </body>
    </ContactWrapper>
  );
}

export default Contact;
