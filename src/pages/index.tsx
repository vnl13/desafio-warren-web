import type { NextPage } from 'next';
import { Container } from '../styles/home.styles';
import { Search } from '../components/Search';
import { TransactionsTable } from '../components/TransactionsTable';

const Home: NextPage = () => {
  return (
    <Container>
      <Search />
      <TransactionsTable />
    </Container>
  );
};

export default Home;
