import axios from "axios";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useNavigate } from "react-router-dom";
function Login() {
const nav = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [token , setToken ] = useLocalStorage("token" , "")

  async function login() {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password,
    });
    setToken(data.accessToken)
    nav("/dashboard");
  }

  return (
    <div>
      <h1>This is Login page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
