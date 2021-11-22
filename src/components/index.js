import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { Container } from "./styles";

function HeaderContainer() {
  const { user, signOut } = useContext(UserContext);

  return (
    <Container>
      <section>
        <img
          src={`https://robohash.org/${Math.random()}?set=set4`}
          alt="avatar"
          width="100px"
        />
        <Link to="/">HOME</Link>
        <Link to="/about" state={{nome:'Nome teste passado via propriedade do link!'}}>SOBRE</Link>
        <Link to="/chat">CHAT</Link>
      </section>
      <Link to="/login" onClick={() => signOut()}>SAIR</Link>
    </Container>
  );
}

export default HeaderContainer;
