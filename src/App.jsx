import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tracked Products Dashboard</h2>
      <ProductList />
    </div>
  );
}

export default App;
