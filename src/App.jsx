import { Routes , Route } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import PostDetails from "./Pages/PostDetails.tsx"
import Todos from "./Pages/Todos"
function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/posts/:id" element={<PostDetails />} />
       
    </Routes>
    </>
  )
}

export default App
