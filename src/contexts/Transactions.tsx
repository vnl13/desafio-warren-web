import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useReducer,
  Reducer,
} from 'react';
import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

type Transaction = {
  amount: number;
  date: string;
  description: string;
  id: string;
  title: string;
  from: string;
  to: string;
  status: string;
};

type TransactionsContextData = {
  filterTransactions: (
    filter?: string | undefined,
    search?: string | undefined
  ) => void;
  transactions: Transaction[];
  filtered: null | Transaction[];
  search: string;
  filter: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

type State = {
  transactions: Transaction[] | [];
  filtered: null | Transaction[];
};

type Action = {
  type: string | '';
  payload: Transaction[] | [];
  filter: string | '';
  search: string | '';
};

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('status');

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    (state: State, action: Action) => {
      switch (action.type) {
        case 'add':
          return { transactions: action.payload, filtered: null };
        case 'filter':
          return {
            ...state,
            filtered: state.transactions.filter((transaction: Transaction) => {
              if (action.filter !== 'status') {
                return (
                  transaction.title
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .match(action.search.toLowerCase()) &&
                  transaction.status === action.filter
                );
              }
              return transaction.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .match(action.search.toLowerCase());
            }),
          };
        default:
          return state;
      }
    },
    {
      transactions: [],
      filtered: null,
    }
  );

  useEffect(() => {
    filterTransactions(search, filter);
  }, [search, filter]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) =>
        response.data
          .map((transaction: Transaction) => ({
            ...transaction,
            status:
              transaction.status === 'created'
                ? 'Solicitada'
                : transaction.status === 'processing'
                ? 'Processando'
                : 'Concluída',
            amount: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(transaction.amount / 100),
          }))
          .sort((a: Transaction, b: Transaction) => {
            return Date.parse(b.date) - Date.parse(a.date);
          })
      )
      .then((transactions: Transaction[]) =>
        dispatch({ payload: transactions, type: 'add', filter: '', search: '' })
      );
  }, []);

  function filterTransactions(search: string = '', filter: string = 'status') {
    dispatch({ type: 'filter', filter, search, payload: [] });
  }

  return (
    <TransactionsContext.Provider
      value={{
        filterTransactions,
        transactions: state.transactions,
        filtered: state.filtered,
        search,
        filter,
        setSearch,
        setFilter,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
