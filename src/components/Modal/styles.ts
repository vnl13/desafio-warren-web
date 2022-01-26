import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

interface ProgressProps {
  status: string;
}

interface DetailsProps {
  isDebit?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000061;
`;

export const Content = styled.div`
  padding: 0.75rem;
  box-shadow: 1px 2px 5px #000;
  border-radius: 4px;
  background: var(--white);
  text-align: center;
  position: relative;
  transform: translate(50%, 25%);
  width: 50%;
  height: 65%;
  z-index: 1;

  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 90%;
    margin: 5rem auto 0;
    position: relative;
    h2 {
      align-self: flex-start;
      margin: 0.5rem 0;
    }
    h2::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      margin: 0.25rem auto;
      background: var(--darkGray);
    }
  }
`;

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  background-color: var(--darkGray);
  right: 0.5rem;
  top: 0.5rem;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: var(--white);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const ProgressBar = styled.div`
  border-radius: 4px;
  border: 1px solid #0000006f;
  position: relative;
  height: 1.825rem;
  width: 100%;
  max-width: 90%;
  margin: 4.5rem auto 7rem;
`;

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  background-color: var(--pink);

  border-radius: ${(props) =>
    props.status === 'Concluída' ? '3px' : '3px 0 0 3px'};

  width: ${(props) =>
    props.status === 'Solicitada'
      ? '7.5%'
      : props.status === 'Processando'
      ? '53%'
      : '100%'};

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    color: #ffffff;
    border-radius: 1rem;
    background: var(--text);
    position: absolute;
    top: 1px;

    left: ${(props) =>
      props.status === 'Solicitada'
        ? '2%'
        : props.status === 'Processando'
        ? '49.25%'
        : '95.5%'};
  }
`;

export const Details = styled.div<DetailsProps>`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0.25rem auto;
  justify-content: space-between;
  align-items: center;
  strong {
    color: ${(props) => (props.isDebit ? '#ff2222' : '#000000')};
  }
`;
