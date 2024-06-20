import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { Grid, Container, Pagination } from '@mui/material';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await fetchProducts(filters, page);
      setProducts(response.data);
      setLoading(false);
    };
    loadProducts();
  }, [filters, page]);

  return (
    <Container>
      <Filters setFilters={setFilters} />
      {loading ? <p>Loading...</p> : (
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination count={10} page={page} onChange={(e, value) => setPage(value)} />
    </Container>
  );
}

export default AllProducts;
