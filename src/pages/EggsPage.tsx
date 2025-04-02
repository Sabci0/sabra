import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const EggsPage: React.FC = () => {
  return (
    <>
    <NavBar/>

    <div className="p-4">
      <h1 className="text-3xl font-bold text-black">Eggs Page</h1>
      <p className="text-black">Explore our egg-related offerings.</p>
    </div>
<Footer/>
    </>
  );
};

export default EggsPage;