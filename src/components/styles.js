import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff8f00;
  height: 8rem;
  padding: 0 3rem;
  font-size: 3ch;
  

  section {
    display: flex;
    align-items: center;
    
    img{
      margin-right: 5rem;
      border-radius: 50%;
      background-color:#FFF;
      padding:1rem;
    }
    a {
      margin: 0 3rem;
      text-decoration: none;
      color: #FFF
      font-weight: bold;
    }
  }

  a{
    text-decoration: none;
      color: #FFF
  }
`;
