import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  position: fixed; 
  bottom: 0; 
  left: 0;
  z-index: 1000; 
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 300;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;

    a {
      color: #ecf0f1;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: #3498db;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px 10px;

    .footer-links {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const FooterSpacer = styled.div`
  height: 100px;
`;

function Footer() {
  return (
    <>
      <FooterSpacer /> 
      <FooterWrapper>
        <p>&copy; 2025 Livraria Online. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/contato">Contato</a>
        </div>
      </FooterWrapper>
    </>
  );
}

export default Footer;