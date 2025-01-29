import { createGlobalStyle } from 'styled-components';

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
    color: #007bff;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }

  ul {
    list-style: none;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }
  }

  header, footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .product-card, .cart-item {
    width: 250px;
    margin: 20px;
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 10px;
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
  }

  @media (max-width: 768px) {
    .product-card, .cart-item {
      width: 100%;
      margin: 10px 0;
    }

    header nav a {
      display: block;
      margin: 10px 0;
    }
  }
`;
