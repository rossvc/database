const baseURL = "https://ross.fail:3001/";

export const loginRequest = async (itemBody) => {
    try {
        const requestOptions = {
            permissions: [ "<all_urls>" ],
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/login", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};