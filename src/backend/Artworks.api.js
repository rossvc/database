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