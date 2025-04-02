import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const FeathersPage: React.FC = () => {
  return (
    <>
    <NavBar/>
    <div className="p-4">
      <h1 className="text-3xl font-bold text-black">Feathers Page</h1>
      <p className="text-black">Find information about our feather products.</p>
    </div>
    <Footer/>
    </>
  );
};

export default FeathersPage;
