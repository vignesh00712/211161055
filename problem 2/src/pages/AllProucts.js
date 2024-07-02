import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://20.244.56.144/test/companies/AMZ/categories/Phone/products?top=10&minPrice=1&maxPrice=10000')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default AllProducts;
