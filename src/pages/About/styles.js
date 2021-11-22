import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 7rem;

  h1 {
    margin: 5rem;
  }
  strong {
    font-size: 2ch;
    color: #e65100;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2ch;
    line-height: 3rem;
  }
  button {
    margin-top: 3rem;
    height: 4rem;
    width: 50%;
    background-color: transparent;
    border: 2px solid #ff8f00;
    border-radius: 0.3rem;
    color: #ff8f00;
    font-size:2ch;
  }
`;
