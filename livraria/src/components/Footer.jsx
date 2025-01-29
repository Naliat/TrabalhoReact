import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;

  p{
    margin-top: 7px;
    margin-left 30px;
  }

  div{
    margin-right: 30px;
  }

  div i{
    margin-left: 20px;
    font-size: 25px
  }

  @media (max-width: 768px) {
    position: static;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2025 Livraria Online. Todos os direitos reservados.</p>
      <div>
        <i class="ri-mail-line"></i>
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-linkedin-box-fill"></i>
        <i class="ri-twitter-x-line"></i>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
