import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const GalleryPage: React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black">Gallery Page</h1>
      <p className="text-black">View our gallery of farm images.</p>
    </div>
  <Footer/>
    </>
  );
};

export default GalleryPage;
