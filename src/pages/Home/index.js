import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../../components";

import Container from "./styles";

function Home() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          aliquam quibusdam quos, qui nobis dolores consectetur repudiandae
          deleniti reprehenderit obcaecati, reiciendis accusamus? Magni omnis
          soluta tenetur sint nam. Omnis, repellendus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          aliquam quibusdam quos, qui nobis dolores consectetur repudiandae
          deleniti reprehenderit obcaecati, reiciendis accusamus? Magni omnis
          soluta tenetur sint nam. Omnis, repellendus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          aliquam quibusdam quos, qui nobis dolores consectetur repudiandae
          deleniti reprehenderit obcaecati, reiciendis accusamus? Magni omnis
          soluta tenetur sint nam. Omnis, repellendus!
        </p>
      </Container>
    </>
  );
}

export default Home;
