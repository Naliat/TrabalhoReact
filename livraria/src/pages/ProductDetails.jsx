import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import livros from '../livros';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const ProductDetailsWrapper = styled.div`
  padding: 80px 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  margin: 50px auto;
  max-width: 1200px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

const ProductImage = styled.div`
  flex: 1;
  max-width: 400px;
  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    width: 100%;
  }

  h1::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #007bff;
    margin: 10px 0 20px;
    border-radius: 2px;
  }

  .author {
    font-size: 1.25rem;
    font-style: italic;
    color: #555;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.125rem;
    color: #555;
    line-height: 1.8;
    text-align: justify;
    margin-bottom: 30px;
  }

  .price {
    font-size: 1.75rem;
    color: #e53935;
    font-weight: 700;
    margin: 20px 0;
  }

  .ratings {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.125rem;
    color: #ffd700;
    margin-bottom: 20px;
  }

  .ratings span {
    font-size: 1.5rem;
  }

  button {
    padding: 12px 25px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .remove-btn {
    background-color: #ff5733;
    margin-top: 10px;

    &:hover {
      background-color: #d43f2f;
    }
  }

  .review-form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: flex-start;
  }

  .review-stars {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }

  .review-stars span {
    font-size: 1.5rem;
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s ease;
  }

  .review-stars span.selected {
    color: #ffd700;
  }

  textarea {
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    resize: vertical;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  .submit-review {
    background-color: #28a745;
    margin-top: 15px;

    &:hover {
      background-color: #218838;
    }
  }
`;

function ProductDetails() {
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === parseInt(id));
  const { dispatch, cart = [] } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const isInCart = cart.some((item) => item.id === livro?.id);
  
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(livro.reviews || []);
  const [reviewText, setReviewText] = useState('');

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: livro });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: livro });
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleReviewSubmit = () => {
    if (rating === 0 || !reviewText.trim()) {
      alert("Por favor, selecione uma avaliação e escreva um comentário.");
      return;
    }

    const newReview = {
      rating,
      text: reviewText,
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
    setRating(0);
  };

  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <ProductDetailsWrapper>
      <ProductImage>
        <img 
          src={livro.imagem} 
          alt={`Capa do livro ${livro.nome}`} 
        />
      </ProductImage>
      <ProductInfo>
        <h1>{livro.nome}</h1>
        <p className="author">{livro.autor}</p>
        <p className="description">{livro.descricaoCompleta}</p>
        <p className="price">{livro.preco}</p>
        <div className="ratings">
          <span>★★★★★</span> ({reviews.length} Avaliações) | Média: {averageRating.toFixed(1)} estrelas
        </div>
        {addedToCart && <p style={{ color: 'green', fontWeight: 'bold' }}>Produto adicionado ao carrinho!</p>}
        <button onClick={addToCart} disabled={isInCart}>
          {isInCart ? 'Já no Carrinho' : 'Adicionar ao Carrinho'}
        </button>
        {isInCart && (
          <button className="remove-btn" onClick={removeFromCart}>
            Remover do Carrinho
          </button>
        )}

        <div className="review-form">
          <h3>Avalie este Livro</h3>
          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? 'selected' : ''}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            placeholder="Escreva sua avaliação..."
          />
          <button className="submit-review" onClick={handleReviewSubmit}>
            Enviar Avaliação
          </button>
        </div>
      </ProductInfo>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails;
