import React from 'react';
import { useParams } from 'react-router-dom';
import livros from '../livros';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === parseInt(id));
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: livro });
  };

  return (
    <div>
      <h1>{livro.nome}</h1>
      <img src={livro.imagem} alt={livro.nome} />
      <p>{livro.descricao}</p>
      <p>{livro.preco}</p>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;
