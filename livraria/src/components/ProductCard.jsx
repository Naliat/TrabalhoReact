import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #777;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  a {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

function ProductCard({ livro }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: livro });
  };

  return (
    <ProductCardWrapper>
      <img src={livro.imagem} alt={livro.nome} />
      <h2>{livro.nome}</h2>
      <p>{livro.descricao}</p>
      <p>{livro.preco}</p>
      <Link to={`/livro/${livro.id}`}>Ver Detalhes</Link>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </ProductCardWrapper>
  );
}

export default ProductCard;
