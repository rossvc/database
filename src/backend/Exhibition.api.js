const baseURL = "https://ross.fail:3001/";

export const addExhibition = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/exhibitions", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding exhibition:', error);
        throw error;
    }
};

export const deleteExhibitionRow = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'DELETE',
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

export const getAllExhibitions = async (startDate = '') => {
    try {
        let url = baseURL + "api/exhibitions";
        
        if (startDate) {
            url += `?startDate=${startDate}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data; // Modify the return to match the expected structure
    } catch (error) {
        console.error('Error getting all exhibitions:', error);
        throw error;
    }
};