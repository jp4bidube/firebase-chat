import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderContainer from "../../components";
import { Container } from "./styles";

function About() {
  const location = useLocation();
  const { nome } = location.state;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <>
      <HeaderContainer />
      <Container>
        <h1>About</h1>
        <strong>{nome ? nome : ""}</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          aliquam quibusdam quos, qui nobis dolores consectetur repudiandae
          deleniti reprehenderit obcaecati, reiciendis accusamus? Magni omnis
          soluta tenetur sint nam. Omnis, repellendus!
        </p>
        <hr />
        <button type="button" onClick={handleClick}>
          IR PARA O CHAT
        </button>
      </Container>
    </>
  );
}

export default About;
