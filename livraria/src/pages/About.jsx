import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 1.6;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 800px;

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo à Livraria Online, sua fonte número um para todos os livros. Estamos dedicados a fornecer a você o melhor dos livros, com foco em qualidade, atendimento ao cliente e exclusividade.</p>
      <p>Fundada em 2025, a Livraria Online percorreu um longo caminho desde o seu início. Quando começamos, nossa paixão por livros nos levou a criar uma plataforma que conecta leitores de todo o mundo.</p>
      <p>Esperamos que você aproveite nossos produtos tanto quanto nós gostamos de oferecê-los a você. Se você tiver alguma dúvida ou comentário, por favor, não hesite em nos contatar.</p>
      <p>Nosso objetivo é criar uma comunidade de leitores apaixonados e oferecer sempre uma experiência de compra inesquecível. Agradecemos sua preferência e confiança em nossos serviços.</p>
    </AboutWrapper>
  );
}

export default About;
