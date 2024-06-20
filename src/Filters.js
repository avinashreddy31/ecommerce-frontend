import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

function Filters({ setFilters }) {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');

  const applyFilters = () => {
    setFilters({ company, category, minPrice, maxPrice, rating, availability });
  };

  return (
    <div>
      <TextField
        select
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <MenuItem value="AMZ">Amazon</MenuItem>
        <MenuItem value="FLP">Flipkart</MenuItem>
        <MenuItem value="SNP">Snapdeal</MenuItem>
        <MenuItem value="MYN">Myntra</MenuItem>
        <MenuItem value="AZO">Azo</MenuItem>
      </TextField>
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="Phone">Phone</MenuItem>
        <MenuItem value="Laptop">Laptop</MenuItem>
        <MenuItem value="TV">TV</MenuItem>
        <MenuItem value="Headset">Headset</MenuItem>
        {/* Add more categories */}
      </TextField>
      <TextField
        label
