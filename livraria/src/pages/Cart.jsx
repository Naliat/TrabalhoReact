import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const total = state.items.reduce((acc, item) => acc + parseFloat(item.preco.replace('R$', '').replace(',', '.')), 0);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <div className="cart-list">
        {state.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imagem} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.preco}</p>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))}
      </div>
      <h2>Total: R$ {total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
