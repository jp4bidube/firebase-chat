import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40rem;
  width:100%;

  div{
    width: 50%;
    display: flex;
    align-items: center;
    input{
      width: 80%;
      height: 3rem;
          background-color: transparent;
          border: 1px solid #ff8f00;
          border-radius: 0.3rem 0  0 0.3rem;
          color: #fff;
          font-size: 2ch;
          padding: 0 1rem;

          &:focus {
            outline: none;
            border: 1px solid #e65100;
          }
    }
    button{
      width: 20%;
      height: 3rem;
      border: none;
      background-color: #e65100;
          border-radius: 0px;
          color: #fff;
    }
  }


  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    list-style: none;
    margin-top: 2rem;
    background-color: #2b2b32;
    padding: 2rem;
    over-flow:scroll;

    li{
      margin-top:1rem;
      align-self: start;
      span{
        align-self: end;
        margin-left:1rem;
      }
    }
    #other {
      position: relative;
      padding: 1rem;
      border-radius: 0.3rem;
      background-color: #ff8f00;
      align-self: flex-start;
      color: #fff;
      :before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 17px solid #ff8f00;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        top: 0px;
        left: -9px;
    }
      
    }
    #me {
      align-self: flex-end;
      background-color: #e65100;
      position: relative;
      padding: 1rem;
      border-radius: 0.3rem;
      color: #fff;
      :before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 17px solid #e65100;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        bottom: 0;
        right: -9px;
      }
    }

    
`;
