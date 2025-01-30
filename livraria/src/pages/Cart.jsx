import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const CartWrapper = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  margin: 20px auto;
  max-width: 1200px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
  }

  h1::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    img {
      max-width: 100%;
      border-radius: 8px;
      object-fit: cover;
      margin-bottom: 15px;
    }

    .item-info {
      text-align: center;
      margin-bottom: 15px;

      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 5px;
      }

      p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 10px;
      }
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 6px;
        font-size: 1rem;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        &:active {
          transform: scale(0.95);
        }
      }

      span {
        font-size: 1.25rem;
        color: #2c3e50;
        min-width: 30px;
        text-align: center;
      }
    }

    .remove-button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 6px;
      font-size: 1rem;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        background-color: #d43f2f;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .order-summary {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .summary-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 1rem;
      color: #555;
    }

    .total {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #ddd;
    }
  }

  .checkout-section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    .coupon-section {
      display: flex;
      gap: 10px;

      input {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        flex: 1;
      }

      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 8px;
        font-size: 1rem;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }

    select {
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ddd;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      background-color: #fff;
      color: #2c3e50;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }

    .checkout-button {
      background-color: #28a745;
      color: white;
      border: none;
      padding: 12px 25px;
      cursor: pointer;
      border-radius: 8px;
      font-size: 1rem;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        background-color: #218838;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: none;
      }
    }
  }

  .success-message {
    margin-top: 20px;
    padding: 20px;
    background-color: #d4edda;
    color: #155724;
    border-radius: 8px;
    text-align: center;
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    padding: 80px 30px;

    h1 {
      font-size: 2.5rem;
    }

    .cart-item {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      img {
        max-width: 100px;
        margin-bottom: 0;
      }

      .item-info {
        text-align: left;
        margin-left: 20px;
        margin-bottom: 0;
      }

      .quantity-controls {
        margin-bottom: 0;
      }
    }

    .order-summary {
      padding: 30px;
    }

    .checkout-section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Cart() {
  const { state, dispatch } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    } else {
      removeFromCart(id);
    }
  };

  const applyCoupon = () => {
    if (couponCode === 'DESCONTO10') {
      setDiscount(10);
    } else {
      alert('Cupom inválido');
    }
  };

  const calculateShipping = () => {
    setShipping(15);
  };

  const subtotal = state.items.reduce(
    (acc, item) => acc + parseFloat(item.preco.replace('R$', '').replace(',', '.')) * item.quantity,
    0
  );

  const total = subtotal - discount + shipping;

  const handlePayment = () => {
    if (state.items.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000); // A mensagem desaparece após 5 segundos
  };

  return (
    <CartWrapper>
      <h1>Carrinho de Compras</h1>
      <div className="cart-list">
        {state.items.length > 0 ? (
          state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagem} alt={item.nome} />
              <div className="item-info">
                <h2>{item.nome}</h2>
                <p>Preço unitário: {item.preco}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>

      {state.items.length > 0 && (
        <>
          <div className="order-summary">
            <h2>Resumo do Pedido</h2>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Desconto</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="checkout-section">
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Cupom de desconto"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={applyCoupon}>Aplicar</button>
            </div>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Selecione o método de pagamento</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="pix">Pix</option>
              <option value="paypal">PayPal</option>
              <option value="mercado_pago">Mercado Pago</option>
            </select>
            <button
              className="checkout-button"
              onClick={handlePayment}
              disabled={!paymentMethod || state.items.length === 0}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}

      {showSuccessMessage && (
        <div className="success-message">
          Compra realizada com sucesso! Obrigado por comprar conosco.
        </div>
      )}
    </CartWrapper>
  );
}

export default Cart;