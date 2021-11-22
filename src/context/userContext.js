import React, { createContext, useState, useEffect } from "react";
import "../services/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFireBase,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (userState) => {
      console.log('teste',userState)
      setUser(userState);
      setLoading(false);
    });
  }, []);

  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const signOut = async () => {
    await signOutFireBase(auth);
  };

  const signUp = async (email, password) => {
    const photoURL = `https://robohash.org/${email}?set=set4&bgset=&size=400x400`
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      photoURL,
      password
    );
  };

  return (
    <UserContext.Provider value={{ user, loading, signIn, signOut, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
