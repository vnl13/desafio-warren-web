import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tbody tr {
    &:nth-child(odd) {
      background: #dedede;
    }
  }
  th,
  td {
    border: 1px solid #00000047;
    border-collapse: collapse;
    text-align: left;

    padding: 0.5rem;
  }
  td {
    cursor: pointer;
  }
`;
