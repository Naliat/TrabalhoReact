import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    color: #ecf0f1;
    letter-spacing: -0.5px;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    gap: 25px;

    a {
      color: #ecf0f1;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #3498db;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0;

    .header-content {
      flex-direction: column;
      gap: 10px;
    }

    nav {
      gap: 15px;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className="header-content">
        <h1>
          <Link to="/">Livraria Online Literis</Link>
        </h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </div>
    </HeaderWrapper>
  );
}

export default Header;