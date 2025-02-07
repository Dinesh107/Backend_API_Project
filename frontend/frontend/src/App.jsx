import "./App.css";
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx' 
import Footer from './components/Footer.jsx' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
          <Route path="search" element={ <Home/>}></Route>
          <Route path="/product/:id" element={ <ProductDetails/>}></Route>
        </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
