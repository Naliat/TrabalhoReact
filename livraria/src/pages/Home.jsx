import React from 'react';
import livros from '../livros';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

function Home() {
  const [filteredBooks, setFilteredBooks] = React.useState(livros);

  const handleSearch = (query) => {
    const filtered = livros.filter((livro) =>
      livro.nome.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList livros={filteredBooks} />
    </div>
  );
}

export default Home;
