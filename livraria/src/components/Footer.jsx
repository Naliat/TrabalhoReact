import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;

  @media (max-width: 768px) {
    position: static;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2025 Livraria Online. Todos os direitos reservados.</p>
    </FooterWrapper>
  );
}

export default Footer;
