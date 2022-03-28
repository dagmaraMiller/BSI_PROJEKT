
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


function App() {

  var user =false;
  <Navbar user={user}/>
  return ( 
    <BrowserRouter>
  <div className="App">
    <div>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} 
        />
        <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login"/>} />

      </Routes>
    </div>
  
  </div>
  </BrowserRouter>
  );
}

export default App;
