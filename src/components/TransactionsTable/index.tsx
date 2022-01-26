import { Table } from './styles';
import { useModal } from '../../contexts/Modal';
import { useTransactions } from '../../contexts/Transactions';

export function TransactionsTable() {
  const { transactions, filtered } = useTransactions();
  const { openModal } = useModal();

  return (
    <Table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {filtered !== null
          ? filtered.map((transaction) => (
              <tr
                key={transaction.id}
                onClick={() => openModal(transaction.id)}
              >
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.status}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))
          : transactions.map((transaction) => (
              <tr
                key={transaction.id}
                onClick={() => openModal(transaction.id)}
              >
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.status}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
}
