import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;

    @media (max-width: 768px) {
      flex: 1;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 0 5px 5px 0;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    input {
      margin-bottom: 10px;
      border-radius: 5px;
    }

    button {
      border-radius: 5px;
    }
  }
`;

function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchBarWrapper>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar livro..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </SearchBarWrapper>
  );
}

export default SearchBar;
