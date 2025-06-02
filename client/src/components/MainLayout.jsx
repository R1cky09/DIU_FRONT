import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>Eventos</h1>
        <p>En esta sección encontrarás las distintas actividades programadas por la Universidad.</p>
        {/* Aquí luego irá la sección de eventos */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
