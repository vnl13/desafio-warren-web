import styled from 'styled-components';

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  max-height: 3rem;

  label {
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 245px;
    background: #eaeaea;
    color: var(--darkGray);
    border: 1px solid #00000047;
  }

  button {
    border: none;
    background: transparent;
    margin-right: 0.5rem;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    height: 2rem;
    font-size: 1rem;
  }

  select {
    border-radius: 4px;
    background: #eaeaea;
    padding: 0 0.5rem;
    border: none;
    height: 2rem;
    font-size: 1rem;
    color: var(--darkGray);
    border: 1px solid #00000047;
  }
`;
