import { UserProvider } from "./context/userContext";
import MainRouter from "./Routes/MainRouter";
import "./services/firebase";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <UserProvider>
      <GlobalStyle/>
      <MainRouter />
    </UserProvider>
  );
}

export default App;
