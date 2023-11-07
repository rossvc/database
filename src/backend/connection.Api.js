import axios from 'axios';

const BASE_URL = 'https://ross.fail:3001';

// Function to fetch artwork data
export async function fetchArtworks() {
  try {
    const response = await axios.get(`${BASE_URL}/artworks`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch artworks');
  }
}

// Function to fetch exhibition data
export async function fetchExhibitions() {
  try {
    const response = await axios.get(`${BASE_URL}/exhibitions`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch exhibitions');
  }
}
