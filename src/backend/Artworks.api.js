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