import React from 'react';
import livros from '../livros';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 40px;
    color: #333;
    font-size: 28px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
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
        <div key={categoria}>
          <h2>{categoria}</h2>
          <ProductList livros={groupedBooks[categoria]} />
        </div>
      ))}
    </HomeWrapper>
  );
}

export default Home;
