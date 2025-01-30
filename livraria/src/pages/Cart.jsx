import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const CartWrapper = styled.div`
  padding: 20px;
  text-align: center;

  .cart-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;

    img {
      max-width: 100px;
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    button {
      background-color: red;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: darkred;
      }
    }

    .quantity-button {
      background-color: #007bff;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      border: none;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .checkout {
    margin-top: 20px;
    background-color: green;
    padding: 10px 20px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: darkgreen;
    }
  }
`;

function Cart() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const groupedItems = state.items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity += 1;
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedItems);

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.preco.replace('R$', '').replace(',', '.')) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartWrapper>
      <h1>Carrinho de Compras</h1>
      <div className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagem} alt={item.nome} />
              <h2>{item.nome}</h2>
              <p>{item.preco}</p>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}x</span>
                <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
      <h2>Total: R$ {total.toFixed(2)}</h2>
      {cartItems.length > 0 && <button className="checkout">Finalizar Compra</button>}
    </CartWrapper>
  );
}

export default Cart;
