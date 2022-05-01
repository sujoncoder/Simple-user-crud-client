import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/users" element={<Users/>}/>
         <Route path="/add" element={<AddUser/>}/>
         <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
