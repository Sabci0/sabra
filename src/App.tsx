import './App.css'
import AgroturismPage from './pages/AgroturismPage';
import Home from './pages/Home'
import { Routes, Route } from "react-router";
import ProductsPage from './pages/ProductsPage';
import FeathersPage from './pages/FeathersPage';
import EggsPage from './pages/EggsPage';
import GalleryPage from './pages/Gallerypage';

function App() {

  return (
   <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agro" element={<AgroturismPage/>} />
        <Route path="/wyroby" element={<ProductsPage/>} />
        <Route path="/piora" element={<FeathersPage />} />
        <Route path="/jajka" element={<EggsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
   </>
  )
}

export default App