import React from 'react';
import livros from '../livros';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  h2 {
    margin-top: 40px;
    color: #2c3e50;
    font-size: 28px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    font-weight: bold;
    transition: color 0.3s;
  }

  h2:hover {
    color: #2980b9;
  }
`;

const CategoryWrapper = styled.div`
  margin-top: 30px;
  padding: 15px;
  background: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

function Home() {
  const [filteredBooks, setFilteredBooks] = React.useState(livros);

  const handleSearch = (query) => {
    const filtered = livros.filter((livro) =>
      livro.nome.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const groupedBooks = filteredBooks.reduce((acc, livro) => {
    acc[livro.categoria] = acc[livro.categoria] || [];
    acc[livro.categoria].push(livro);
    return acc;
  }, {});

  return (
    <HomeWrapper>
      <SearchBar onSearch={handleSearch} />
      {Object.keys(groupedBooks).map((categoria) => (
        <CategoryWrapper key={categoria}>
          <h2>{categoria}</h2>
          <ProductList livros={groupedBooks[categoria]} />
        </CategoryWrapper>
      ))}
    </HomeWrapper>
  );
}

export default Home;
