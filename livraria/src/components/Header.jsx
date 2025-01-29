import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  padding: 10px 0;
  text-align: center;
  display: flex;
  justify-content: space-between;

  h1{
    color: white;
    margin-left: 30px;

    i{
      margin-right: 5px;
    }
  }

  nav {
    margin-top: 12px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      

      &:hover {
        text-decoration: underline;
      }

      i{
        margin-right: 3px;
        text-decoration: none;
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
      <h1><i class="ri-book-open-fill"></i>Livraria Online</h1>
      <nav>
        <Link to="/"><i class="ri-home-fill"></i>Início</Link>
        <Link to="/about"><i class="ri-information-2-fill"></i>Sobre</Link>
        <Link to="/contact"><i class="ri-customer-service-2-fill"></i>Contato</Link>
        <Link to="/carrinho"><i class="ri-shopping-cart-2-fill"></i>Carrinho</Link>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
