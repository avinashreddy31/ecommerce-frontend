import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (filters, page) => {
  const { company, category, minPrice, maxPrice, rating, availability } = filters;
  const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products/top-n`, {
    params: {
      minPrice,
      maxPrice,
      rating,
      availability,
      page
    }
  });
  return response;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response;
};
