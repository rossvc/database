// Import the necessary libraries (e.g., Axios)
import axios from 'axios';
// Run npm install axios

// Define the base URL for your backend API
const backendUrl = 'https://ross.fail:3001';

// Function to fetch exhibitions
const fetchExhibitions = async () => {
  try {
    const response = await axios.get(`${backendUrl}/exhibitions`);
    const exhibitions = response.data;
    // Update your frontend with the retrieved exhibition data
    console.log('Exhibitions:', exhibitions);
    // You can update your component's state or render the data as needed
  } catch (error) {
    console.error('Error fetching exhibitions:', error);
  }
};

// Function to fetch artworks
const fetchArtworks = async () => {
  try {
    const response = await axios.get(`${backendUrl}/artworks`);
    const artworks = response.data;
    // Update your frontend with the retrieved artwork data
    console.log('Artworks:', artworks);
    // You can update your component's state or render the data as needed
  } catch (error) {
    console.error('Error fetching artworks:', error);
  }
};

// Call the functions to fetch data when needed
fetchExhibitions();
fetchArtworks();
