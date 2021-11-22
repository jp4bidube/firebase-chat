import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:3ch;
  color:#e65100;
`;

export const Content = styled.main`
  display: flex;
  flex: 1;

  article {
    display: flex;
    flex: 1;
    align-items: center;
    img {
      width: 100%;
    }
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;

      span {
        text-align: center;
        width: 100%;
        padding-bottom: 1rem;
        font-size: 2ch;
        border-bottom: 3px solid #ff8f00;
      }

      span + span {
        border-bottom: none;
        margin-left: 1rem;
      }
    }

    form {
      width: 100%;
      height: 100%;
      max-width: 25vw;
      max-height: 50vh;
      background-color: #2b2b32;
      padding: 2rem;
      border-radius: 1rem;
      div {
        display: flex;
        flex-direction: column;
        label {
          margin-bottom: 0.5rem;
          font-size: 1.6ch;
        }

        input {
          height: 3rem;
          background-color: transparent;
          border: 1px solid #ff8f00;
          border-radius: 0.3rem;
          color: #fff;
          font-size: 2ch;
          padding: 0 1rem;

          &:focus {
            outline: none;
            border: 1px solid #e65100;
          }
        }
      }

      div + div {
        margin-top: 1.5rem;
      }
      section {
        display: flex;
        flex-direction: row;
        button {
          margin-top: 3rem;
          height: 4rem;
          width: 100%;
          background-color: transparent;
          border: 2px solid #ff8f00;
          border-radius:.3rem;
          color: #ff8f00;
          font-size: 2ch;
        }

        button + button{
          margin-left: 2rem;
          background-color: #ff8f00;
          border: none;
          border-radius:.3rem;
          color: #FFF
        }
      }
     
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  height: 15vh;
  background-color: #e65100;
  justify-content:space-between;
  align-items:center;
  #logo {
   
    img{
      margin: 0 1rem;
    }
  }
  #about {
    p{
      margin-top:1rem;
      line-height:.2rem;
      font-size:1.3ch; 
      color: #000;
      font-weight:bold;
    }
  }
  #social{
    display: flex;
    justify-content:space-between;
    img{
      margin: 0 1rem;
    }
  }
`;
