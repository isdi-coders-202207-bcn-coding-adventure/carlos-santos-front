import styled from "styled-components";

const CounterStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 2rem;
  text-align: center;

  .counter {
    &__digit {
      display: block;
      width: fit-content;
      padding: 1em;
      margin-bottom: 0.5rem;
      background-color: #ffc700;
      border-radius: 20px;
      color: var(--color-dark);
      font-size: 3rem;
    }
  }
`;

export default CounterStyled;
