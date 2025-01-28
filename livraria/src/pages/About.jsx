import React from 'react';
import styled from 'styled-components';
import GitHub from '../imgs/GitHub.png';
import Linkedin from '../imgs/Linkedin.png';
import Delivery from '../imgs/Entregas.png';
import EnvironmentalSafety from '../imgs/SegurancaAmbiental.png';
import Security from '../imgs/Seguranca.png';

const AboutWrapper = styled.div`
  padding: 80px 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  margin: 50px auto;
  max-width: 1200px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 60px 0;
    letter-spacing: 1.5px;
    text-align: center;
    color: #2c3e50;
    position: relative;
    display: inline-block;
    width: 100%;
  }

  h1::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
    margin: 60px 0 30px;
    position: relative;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .section-content {
    font-size: 1.125rem;
    color: #555;
    line-height: 1.8;
    text-align: justify;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .cards-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
  }

  .card {
    width: 30%;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .card img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #007bff;
  }

  .card-text {
    font-size: 1rem;
    color: #777;
    line-height: 1.6;
  }

  .team-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
  }

  .team-member {
    width: 22%;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-10px);
  }

  .team-member h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3e50;
  }

  .team-member p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 15px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  .social-links a {
    font-size: 1.5rem;
    color: #555;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #007bff;
  }

  .social-links img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }

  .social-links img:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    h1 {
      font-size: 2rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .card, .team-member {
      width: 100%;
      margin-bottom: 30px;
    }

    .team-container {
      flex-direction: column;
      align-items: center;
    }

    .cards-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

function About() {
  return (
    <AboutWrapper>
      <h1>Bem-vindos à Livraria Online Literis!</h1>

      <section>
        <h2 className="section-title">Sobre Nós</h2>
        <p className="section-content">
          A Literis nasceu do sonho de quatro amigos apaixonados por literatura e tecnologia: Tailan, Ana Clara, Ismael e
          José Matheus. Unidos pela ideia de democratizar o acesso à leitura e aproveitar o poder da internet,
          fundaram em 2024 uma plataforma inovadora que une a praticidade de uma loja virtual à experiência enriquecedora
          de explorar uma livraria física. Ao contrário de muitas lojas virtuais, a Literis se destaca por sua curadoria
          especializada, onde buscamos oferecer títulos de diversos gêneros e autores para todos os gostos e idades.
        </p>
        <p className="section-content">
          A Literis surgiu a partir de uma conversa informal entre os fundadores, onde compartilhavam as dificuldades que
          enfrentavam ao tentar encontrar livros de qualidade a preços acessíveis. Sentiram que a experiência de compra
          online muitas vezes deixava a desejar, com plataformas difíceis de navegar e sem um bom suporte ao cliente. Foi
          então que surgiu a ideia de criar uma livraria virtual moderna, intuitiva e que oferecesse uma experiência de
          compra personalizada, facilitando o acesso à literatura para todos, sem importar o lugar onde estivessem.
        </p>
      </section>

      <section>
        <h2 className="section-title">Nossa Missão</h2>
        <p className="section-content">
          Nossa missão é tornar o acesso à literatura mais simples e acessível para todos. Queremos garantir que qualquer
          pessoa, em qualquer lugar, possa explorar e comprar seus livros favoritos com facilidade, sem ter que sair de
          casa. Buscamos também contribuir para o desenvolvimento cultural e educacional do país, através da promoção de
          conteúdos literários que agreguem conhecimento, diversão e reflexões importantes.
        </p>
        <p className="section-content">
          Nossa visão é ser a maior e mais confiável livraria virtual do Brasil, reconhecida por seu compromisso com a
          educação, cultura, inovação e excelência no atendimento ao cliente. Trabalhamos continuamente para oferecer uma
          experiência única de compra e entregar aos nossos clientes livros que os inspirem e os conectem a novas ideias.
        </p>
      </section>

      <section>
        <h2 className="section-title">Nós Garantimos</h2>
        <div className="cards-container">
          <div className="card">
            <img src={Delivery} alt="Política de Entrega" />
            <h3 className="card-title">Política de Entregas</h3>
            <p className="card-text">
              Oferecemos opções de envio rápidas e seguras para todo o Brasil, com rastreamento em tempo real e prazos
              de entrega que se ajustam às necessidades de nossos clientes. Garantimos que seus livros cheguem em perfeitas
              condições.
            </p>
          </div>
          <div className="card">
            <img src={EnvironmentalSafety} alt="Segurança Ambiental" />
            <h3 className="card-title">Segurança Ambiental</h3>
            <p className="card-text">
              Nos preocupamos com o meio ambiente e adotamos práticas sustentáveis em nossa operação. Utilizamos embalagens
              recicláveis e trabalhamos para reduzir nossa pegada de carbono.
            </p>
          </div>
          <div className="card">
            <img src={Security} alt="Política de Segurança" />
            <h3 className="card-title">Política de Segurança</h3>
            <p className="card-text">
              Sua segurança é nossa prioridade. Implementamos medidas de segurança rigorosas em nosso site para proteger seus
              dados pessoais e garantir uma experiência de compra confiável.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Transformando a Sua Experiência</h2>
        <p className="section-content">
          A Literis está revolucionando a forma como as pessoas compram e consomem livros. Em vez de simplesmente
          oferecer produtos, buscamos criar uma jornada literária que vai muito além da compra de um livro. Nossa
          plataforma oferece recursos de recomendação personalizados, onde, com base no seu histórico de leitura e
          preferências, sugerimos livros que se encaixem no seu estilo e necessidades. Além disso, buscamos criar uma
          comunidade de leitores engajados, com discussões e resenhas que enriquecem a experiência de leitura de cada
          usuário.
        </p>
        <p className="section-content">
          Venha conhecer nossa loja! Aqui, você poderá descobrir desde os clássicos da literatura até os lançamentos mais
          esperados, tudo com a praticidade e comodidade que você merece. Estamos aqui para facilitar sua jornada literária.
        </p>
      </section>

      <section>
        <h2 className="section-title">Conheça os Fundadores da Literis</h2>
        <div className="team-container">
          <div className="team-member">
            <h3>Tailan</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tailandesouza/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Naliat" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>Ana Clara</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/annaclrr/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/AnnaClr" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>José Matheus</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/josé-matheus-ferreira-lino-de-sena-2428b32b5/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/josematheus32" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>Ismael</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/MAGEOFCODES" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AboutWrapper>
  );
}

export default About;
