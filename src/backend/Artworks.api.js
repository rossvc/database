const baseURL = "https://ross.fail:3001/";

export const getAllArtworks = async () => {
    try {
        const response = await fetch(baseURL + "api/artworks");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting all artworks:', error);
        throw error;
    }
};

export const getAllArtworks2 = async () => {
    try {
      const response = await fetch(baseURL + "api/artworks");
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
      }
      const data = await response.json();
      
      // Modify the data received to include additional properties
      const artworksWithData = data.data.map(artwork => {
        return {
          ArtworkID: artwork.ArtworkID,
          Title: artwork.Title,
          Description: artwork.Description,
          Image: artwork.Image,
          ArtistName: artwork.ArtistName,
          Medium: artwork.Medium,
          Dimensions: artwork.Dimensions,
          Style: artwork.Style
          // Add more properties here as needed
        };
      });
  
      return artworksWithData;
    } catch (error) {
      console.error('Error getting all artworks:', error);
      throw error;
    }
  };

export const addArtwork = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/artworks", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding art collection:', error);
        throw error;
    }
};

export const updateArtwork = async (ID,itemBody) => {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+`api/artworks/${ID}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error updating artwork:', error);
        throw error;
    }
};

export const addArtworkToCollection = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/collectionartworks", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding art collection:', error);
        throw error;
    }
};

export const addArtworkToExhibition = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/exhibitionartworks", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding art collection:', error);
        throw error;
    }
};

export const getArtwork = async (itemID) => {
    try {
        const response = await fetch(baseURL+"api/artworks/"+itemID);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting artwork:', error);
        throw error;
    }
};  

export const searchArtworks = async (query) => {
    
    try {
      const response = await fetch(`${baseURL}api/search/artworks?title=${query}`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error('Error searching artworks:', error);
      throw error;
    }
  };


export const deleteArtwork = async (itemID) => {
    try {
        const response = await fetch(baseURL + "api/artworks/" + itemID, {
            method: 'DELETE',
        });

        if (response.status === 200) {
            const data = await response.json();
            return { success: data.success };
        } else if (response.status === 404) {
            const data = await response.json();
            throw new Error(data.error);
        } else {
            throw new Error('Failed to delete artwork');
        }
    } catch (error) {
        console.error('Error deleting artwork:', error);
        throw error;
    }
};
