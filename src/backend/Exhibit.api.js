const baseURL = "https://ross.fail:3001/";

export const getAllExhibits = async () => {
    try {
        const response = await fetch(baseURL + "api/exhibitions");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting all exhibits:', error);
        throw error;
    }
};

// Add other api functions 