import React from "react";
import styled from "styled-components";
import dog1 from "../imgs/dog1.jpg";
import dog2 from "../imgs/dog2.jpg";
import dog3 from "../imgs/dog3.jpg";

const NotFoundWrapper = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const ErrorImage = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const images = [dog1, dog2, dog3];

function NotFound() {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <NotFoundWrapper>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <ErrorImage src={randomImage} alt="Erro 404" />
    </NotFoundWrapper>
  );
}

export default NotFound;
