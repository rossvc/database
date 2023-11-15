const baseURL = "https://ross.fail:3001/";

export const getAllTickets = async () => {
    try {
        const response = await fetch(baseURL + "api/tickettypes");
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
