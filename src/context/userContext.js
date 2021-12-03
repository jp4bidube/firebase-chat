import React, { createContext, useState, useEffect } from "react";
import "../services/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFireBase,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const auth = getAuth();

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (userState) => {
      setUser(userState);
      setLoading(false);
    });
  }, []);

  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const signInGoole = async () => {
    const provider = new GoogleAuthProvider();
    console.log(provider)
    try {
      const response = await signInWithPopup(provider).then((res) => {
        // const token = res.credential.accessToken;
        // const user = res.user;

        return res
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = async () => {
    await signOutFireBase(auth);
  };

  const signUp = async (email, password) => {
    const photoURL = `https://robohash.org/${email}?set=set4&bgset=&size=400x400`;
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      photoURL,
      password
    );
  };

  return (
    <UserContext.Provider
      value={{ user, loading, signIn, signOut, signUp, signInGoole }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
