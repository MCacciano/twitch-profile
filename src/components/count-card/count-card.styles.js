import styled from 'styled-components';

export const LI = styled.li`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;

  text-align: center;
  /* background-color: #772ce8; */
  /* border: 1px solid #451096; */
  border: 1px solid rgb(16, 23, 28);
  border-radius: 10px;
  position: relative;
  color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(16, 23, 28, 0.7);

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    /* background-color: rgba(16, 23, 28, 0.95); */
    background: linear-gradient(to top, rgba(16, 23, 28, 0.9), rgba(16, 23, 28, 0.7) 40%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  h3 {
    margin: auto;
    font-size: 1.75rem;
  }

  p {
    margin: auto;
    font-size: 1.5rem;
  }
`;
