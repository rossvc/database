const baseURL = "https://ross.fail:3001/";

export const addGiftShopItem = async (itemBody) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+"api/giftshop", requestOptions);
        if (!response.ok) {
            throw new Error( `Fetch error: ${response.status}` )
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error adding gift shop item:', error);
        throw error;
    }
};

export const getAllGiftShopItems = async () => {
    try {
        const response = await fetch(baseURL + "api/giftshop");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting gift shop items:', error);
        throw error;
    }
};


export const getGiftShopItem = async (item) => {
    try {
        const response = await fetch(baseURL+"api/search/giftshopitems?itemName="+item);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting gift shop item:', error);
        throw error;
    }
};

export const updateGiftShopItem = async (ID,itemBody) => {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(itemBody)
        }
        const response = await fetch(baseURL+`api/giftshop/${ID}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error updating gift shop item:', error);
        throw error;
    }
};