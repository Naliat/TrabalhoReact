import { createGlobalStyle } from 'styled-components';
import 'remixicon/fonts/remixicon.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #555;
    }
  }

  header, footer {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .product-card, .cart-item {
    max-width: 200px;
    margin: 20px;
  }

  @media (max-width: 768px) {
    .product-card, .cart-item {
      max-width: 100%;
    }

    header nav a {
      display: block;
      margin: 10px 0;
    }
  }
`;
