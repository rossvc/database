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


export const searchArtworks = async (query) => {
    try {
      const response = await fetch(baseURL + `api/artworks?name=${query}`);
      
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error searching artworks:', error);
      throw error;
    }
  };
  
//   This adjustment assumes that your backend API supports a query parameter 
//   for filtering artworks by their name, using something like /api/artworks?name=query, 
//   where query is the search term. If your API endpoint structure differs, 
//   adjust the URL accordingly to match your backend's endpoint structure for searching artworks by name. 
//   This change ensures the searchArtworks function filters artworks based on the provided name query.