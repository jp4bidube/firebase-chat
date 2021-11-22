import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import firebaseApp from "../../services/firebase";
import { VscEye, VscCheck } from "react-icons/vsc";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import HeaderContainer from "../../components";
import { Container } from "./styles";

function Chat() {
  const db = getFirestore(firebaseApp);

  const { user, signOut } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "messages"), where("readed", "!=", true)),
      (querySnapshot) => {
        const tmp = [];
        querySnapshot.forEach(async (document) => {
          tmp.push({
            id: document.id,
            ...document.data(),
          });
        });
        setMessages(tmp);
      }
    );
    return () => unsub();
  }, []);

  const hanleMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        message: message,
        readed: false,
        userId: user.uid,
      });
      setMessage('')
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(messages);
  return (
    <>
      <HeaderContainer />
      <Container>
        <h1>Chat - {user?.email}</h1>
        <ul>
          {messages.map((message) => {
            if (message.userId === user.uid) {
              return (
                <li key={message.id} id="me">
                  {message.message}
                  <span>{!message.readed ? <VscEye /> : <VscCheck />}</span>
                </li>
              );
            } else {
              return (
                <li key={message.id} id="other">
                  {message.message}
                  {/* <span>{!message.readed ? <VscEye /> : <VscCheck />}</span> */}
                </li>
              );
            }
          })}
        </ul>
        <div id="inputBlock">
          <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)}/>
          <button onClick={() => hanleMessage()}>Enviar</button>
        </div>
      </Container>
    </>
  );
}

export default Chat;
