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

    button {
      background-color: red;
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

  const total = state.items.reduce((acc, item) => acc + parseFloat(item.preco.replace('R$', '').replace(',', '.')), 0);

  return (
    <CartWrapper>
      <h1>Carrinho de Compras</h1>
      <div className="cart-list">
        {state.items.length > 0 ? (
          state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagem} alt={item.nome} />
              <h2>{item.nome}</h2>
              <p>{item.preco}</p>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
      <h2>Total: R$ {total.toFixed(2)}</h2>
      <button className="checkout">Finalizar Compra</button>
    </CartWrapper>
  );
}

export default Cart;
