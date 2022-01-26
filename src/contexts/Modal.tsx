import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

type ModalContextData = {
  isOpen: boolean;
  openModal: (id: string) => void;
  closeModal: () => void;
  transaction: Transaction;
};

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

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState<Transaction>(
    {} as Transaction
  );

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const fetchTransaction = async (id: string) => {
    const { data } = await api.get(`/transactions/${id}`);
    const transaction = {
      ...data,
      status:
        data.status === 'created'
          ? 'Solicitada'
          : data.status === 'processing'
          ? 'Processando'
          : 'Concluída',
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(data.amount / 100),
    };

    return transaction;
  };

  async function openModal(id: string) {
    const transaction = await fetchTransaction(id);
    setTransaction(transaction);
    setIsOpen(true);
  }

  function closeModal() {
    setTransaction({} as Transaction);
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, transaction }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
