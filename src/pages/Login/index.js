import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Container, Header, Content, Footer } from "./styles";
import fireLogo from "../../assets/icon.svg";

function Login() {
  const { user, signIn, signUp } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    await signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.log(e.message));
  };
  const handleRegister = async () => {
    await signUp(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Container>
      <Header>
        <h1>CHAT DO JP</h1>
      </Header>
      <Content>
        <article>
          <img src="https://i.pinimg.com/originals/6f/08/1c/6f081c95e1d4bfea095132e71d68940c.gif" />
        </article>
        <section>
          <form onSubmit={(e) => e.preventDefault()}>
            <header>
              <span>Membro</span>
              <span>Convidado</span>
            </header>
            <div>
              <label>E-mail</label>
              <input
                required
                value={email}
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Senha</label>
              <input
                value={password}
                type="password"
                required
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <section>
              <button type="submit" onClick={handleRegister}>
                Cadastrar
              </button>
              <button type="submit" onClick={handleLogin}>
                Logar
              </button>
            </section>
          </form>
        </section>
      </Content>

      <Footer>
        <div id="logo">
          <img src="/images/campfire.png" alt="" width="60px" />
        </div>
        <div id="about">
          <p>Contato</p>
          <p>contato@contato.com</p>
        </div>
        <div id="social">
          <img src="/images/instagram.png" alt="" width="50px" />
          <img src="/images/facebook.png" alt="" width="50px" />
          <img src="/images/github.png" alt="" width="50px" />
          <img src="/images/linkedin.png" alt="" width="50px" />
        </div>
      </Footer>
    </Container>
  );
}

export default Login;
