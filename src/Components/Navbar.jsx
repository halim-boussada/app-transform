import { useContext } from "react"
import { userContext } from "../Pages/userContext"

export default function Navbar(){

    const { user } = useContext(userContext)

    return <div className="navbar">
        <div>
          <h3 className="title">welcome back {user.firstName}</h3>
        </div>
        <div className="right">
          <img className="avatar" src={user.image} alt="" />
          <button className="btn-danger">Logout</button>
        </div>
      </div>
}