/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../../context/userContext";
import firebaseApp from "../../services/firebase";
import { VscEye, VscCheck } from "react-icons/vsc";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import HeaderContainer from "../../components";
import { Container } from "./styles";

function Chat() {
  const db = getFirestore(firebaseApp);

  const { user, signOut } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "messages"), orderBy("created", "desc"), limit(200)),
      (querySnapshot) => {
        const tmp = [];
        querySnapshot.forEach(async (document) => {
          tmp.push({
            id: document.id,
            ...document.data(),
          });
        });
        setMessages(tmp.reverse());
      }
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  const hanleMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        message: message,
        readed: false,
        userId: user.uid,
        created: serverTimestamp(),
      });
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderContainer />
      <Container>
        <h1>Chat - {user?.email}</h1>
        <ul ref={ref}>
          {messages.map((message) => {
            if (message.userId === user.uid) {
              return (
                <li key={message.id} id="me">
                  <img
                    src={`https://robohash.org/${user.uid}?set=set4`}
                    width="50px"
                  />
                  <section>
                    <strong>{message.message}</strong>
                    <p>
                      {message.created && message?.created
                        .toDate()
                        .toLocaleTimeString("pt-BR")
                        .substring(0, 5)}
                    </p>
                    <span>{!message.readed ? <VscEye /> : <VscCheck />}</span>
                  </section>
                </li>
              );
            } else {
              return (
                <li key={message.id} id="other">
                  <img
                    src={`https://robohash.org/${message.userId}?set=set4`}
                    width="50px"
                  />
                  <section>
                    <p>
                      {message.created && message.created
                        .toDate()
                        .toLocaleTimeString("pt-BR")
                        .substring(0, 5)}
                    </p>
                    <strong>{message.message}</strong>
                  </section>
                </li>
              );
            }
          })}
        </ul>
        <div id="inputBlock">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={() => hanleMessage()}>Enviar</button>
        </div>
      </Container>
    </>
  );
}

export default Chat;
