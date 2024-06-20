import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Container, Typography, Card, CardContent } from '@mui/material';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductById(id);
      setProduct(response.data);
    };
    loadProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6">Company: {product.company}</Typography>
          <Typography variant="body1">Category: {product.category}</Typography>
          <Typography variant="body1">Price: ${product.price}</Typography>
          <Typography variant="body1">Rating: {product.rating}</Typography>
          <Typography variant="body1">Discount: {product.discount}%</Typography>
          <Typography variant="body1">Availability: {product.availability}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductPage;
