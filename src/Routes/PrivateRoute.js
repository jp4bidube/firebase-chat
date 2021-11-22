import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
// import { Container } from './styles';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(UserContext);
  
  if(loading) {
    return (
      <div>
        <p>Carregando ...</p>
      </div>
    )
  }

  return user !== null ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
