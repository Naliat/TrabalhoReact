import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Livraria Online</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
