import "./App.css";
import Header from "./components/Header";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/cart' element={<Cart/>}/>
						<Route path='*' element={<NotFound/>}/>
					</Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
