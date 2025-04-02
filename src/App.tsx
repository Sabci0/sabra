import './App.css'
import AgroturismPage from './pages/AgroturismPage';
import Home from './pages/Home'
import { Routes, Route } from "react-router";
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
   <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agro" element={<AgroturismPage/>} />
        <Route path="/wyroby" element={<ProductsPage/>} />
      </Routes>
   </>
  )
}

export default App
