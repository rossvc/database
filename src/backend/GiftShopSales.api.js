const baseURL = "https://ross.fail:3001/";

export const getAllGiftshopSales = async () => {
    try {
        const response = await fetch(baseURL + "api/giftshopsales");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting all tickets:', error);
        throw error;
    }
};

export const addGiftshopSales = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/giftshopsales", requestOptions);
        //console.log(response);
        if (response.status === 200) {
            return true;
        } else if (response.status === 409) {
            //console.log("Error adding sale");
            return false;
        } else {
            throw new Error(`Fetch error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error adding sale:', error);
        throw error;
    }
};