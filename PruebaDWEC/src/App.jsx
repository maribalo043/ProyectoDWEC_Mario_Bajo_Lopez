import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { UserList } from "./components/UserList";
import { UserUpdate } from "./components/UserUpdate";
import { UserCreate } from "./components/UserCreate";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/usuarios" element={<UserList/>}></Route>
          <Route path="/create" element={<UserCreate/>}></Route>
          <Route path="/update/:id" element={<UserUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
