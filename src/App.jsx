import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="container">
      <SignUpForm setToken={setToken}></SignUpForm>
      <Authenticate token={token}></Authenticate>
    </div>
  );
}

export default App;
