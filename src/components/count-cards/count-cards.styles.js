import styled from 'styled-components';

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 150px));
  grid-gap: 1rem;
  justify-content: space-between;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  list-style: none;
`;
