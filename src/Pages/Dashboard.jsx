import { useEffect, useState } from "react";
import Posts from "./Posts";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalstorage";
import "./Dashboard.css"
import Navbar from "../Components/Navbar";
import { userContext } from "./userContext";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [token, setToken] = useLocalStorage("token", "");
 
  
  useEffect(() => {
      async function getConnectedUser() {
    const { data } = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setUser(data);
  }
    getConnectedUser();
  }, []);

  return (
    <div>
    <userContext.Provider value={{ user }} >
      <Navbar  />
      <Posts />
     </userContext.Provider>
    </div>
  );
}
