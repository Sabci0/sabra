import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GalleryCarousel from '../components/GalleryCarousel';

const GalleryPage: React.FC = () => {
  return (
    <>
    <NavBar/>
    <GalleryCarousel/>
    <Footer/>
    </>
  );
};

export default GalleryPage;
