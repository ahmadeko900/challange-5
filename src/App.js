import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from "./pages/Search/Search";
import CarsDetail from "./pages/CarsDetail/CarsDetail";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/search' element={<Search />}/>
      <Route path='/:id' element={<CarsDetail/> }/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
