import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to stop tracking this product?')) {
      axios.delete(`http://localhost:5000/api/product/${id}`)
        .then(() => fetchProducts()) // Refresh after delete
        .catch(err => console.error('Error deleting:', err));
    }
  };

  return (
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>Product URL</th>
          <th>User Email</th>
          <th>Last Known Price</th>
          <th>Price History</th>
          <th>Action</th> {/* New Column */}
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? products.map((product, index) => (
          <tr key={index}>
            <td><a href={product.productURL} target="_blank" rel="noreferrer">{product.productURL}</a></td>
            <td>{product.userEmail}</td>
            <td>{product.lastKnownPrice}</td>
            <td>{product.priceHistory.length > 0 ? product.priceHistory.join(', ') : 'N/A'}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product._id)}>Delete</button>
            </td>
          </tr>
        )) : (
          <tr><td colSpan="5">No products being tracked yet.</td></tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductList;
