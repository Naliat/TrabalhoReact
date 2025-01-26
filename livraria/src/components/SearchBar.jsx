import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 25px 0 0 25px;
    outline: none;
    flex: 1;
    max-width: 400px;
  }

  button {
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 0 25px 25px 0;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    input {
      margin-bottom: 10px;
      border-radius: 25px;
    }

    button {
      border-radius: 25px;
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
