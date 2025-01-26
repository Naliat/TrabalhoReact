import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

function ProductList({ livros }) {
  return (
    <ProductListWrapper>
      {livros.map((livro) => (
        <ProductCard key={livro.id} livro={livro} />
      ))}
    </ProductListWrapper>
  );
}

export default ProductList;
