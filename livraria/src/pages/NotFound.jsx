import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
    </NotFoundWrapper>
  );
}

export default NotFound;
