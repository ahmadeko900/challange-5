import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from "./pages/Search/Search";
import CarsDetail from "./pages/CarsDetail/CarsDetail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/search' element={<Search />}/>
      <Route path='/:id' element={<CarsDetail/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
