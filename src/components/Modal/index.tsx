import { GrFormClose } from 'react-icons/gr';
import { useModal } from '../../contexts/Modal';
import {
  CloseButton,
  Container,
  Content,
  Details,
  Progress,
  ProgressBar,
} from './styles';

export function Modal() {
  const { isOpen, closeModal, transaction } = useModal();
  return (
    <Container isOpen={isOpen} onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>
          <GrFormClose size={25} />
        </CloseButton>

        <h1>{transaction.title}</h1>

        <ProgressBar>
          <Progress status={transaction.status} />
          <Details>
            {transaction.status === 'Solicitada' ? (
              <strong>Solicitada</strong>
            ) : (
              <span>Solicitada</span>
            )}
            {transaction.status === 'Processando' ? (
              <strong>Processando</strong>
            ) : (
              <span>Processando</span>
            )}
            {transaction.status === 'Concluída' ? (
              <strong>Concluída</strong>
            ) : (
              <span>Concluída</span>
            )}
          </Details>
        </ProgressBar>

        <section>
          <h2>Transferindo de</h2>
          <Details isDebit>
            <span>{transaction.from}</span>
            <strong>- {transaction.amount}</strong>
          </Details>
        </section>

        <section>
          <h2>Para</h2>
          <Details>
            <span>{transaction.to}</span>
            <strong>{transaction.amount}</strong>
          </Details>
        </section>
      </Content>
    </Container>
  );
}
