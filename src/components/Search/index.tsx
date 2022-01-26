import { FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBar } from './styles';
import { useTransactions } from '../../contexts/Transactions';

export function Search() {
  const { filterTransactions, search, setSearch, filter, setFilter } =
    useTransactions();

  async function handleSearch(e: FormEvent) {
    e.preventDefault();
    filterTransactions(search, filter);
  }

  return (
    <SearchBar onSubmit={handleSearch}>
      <label htmlFor='search'>
        <button type='submit'>
          <FiSearch />
        </button>
        <input
          id='search'
          name='search'
          type='search'
          placeholder='Pesquise pelo título'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </label>
      <select
        defaultValue={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
      >
        <option value='status'>Status</option>
        <option value='Processando'>Processando</option>
        <option value='Solicitada'>Solicitada</option>
        <option value='Concluída'>Concluída</option>
      </select>
    </SearchBar>
  );
}
