import React from 'react';
import { useParams } from 'react-router-dom';
import livros from '../livros';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const ProductDetailsWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

function ProductDetails() {
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === parseInt(id));
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: livro });
  };

  return (
    <ProductDetailsWrapper>
      <h1>{livro.nome}</h1>
      <img src={livro.imagem} alt={livro.nome} />
      <p>{livro.descricao}</p>
      <p>{livro.preco}</p>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails;
