import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={`https://source.unsplash.com/random?${product.category}`}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Availability: {product.availability}
        </Typography>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
