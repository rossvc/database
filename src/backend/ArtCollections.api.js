const baseURL = "https://ross.fail:3001/";

export const addArtCollection = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/collections", requestOptions);
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

export const getAllArtCollections = async () => {
    try {
        const response = await fetch(baseURL+"api/collections");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting all art collections', error);
        throw error;
    }
};