import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px 0;
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
