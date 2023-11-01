const baseURL = "https://ross.fail:3001/";

export const getAllGiftShopItems = async () => {
    try {
        const response = await fetch(baseURL + "api/giftshop/items");
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


export const getGiftShopItem = async(item) => {
    try{
        const response = await fetch(baseURL+"api/search/giftshopitems?itemName="+item);
        console.log(response);
        return response;
    }
    catch(error){
        console.error('Error getting user:', error);
    }
};

export const updateGiftShopItem = async(itemBody) => {
    try{
        const requestOptions = {
            method: "PUT",
            headers: {'Content-Type':'application/json'},
            body: itemBody
        }
        const response = await fetch(baseURL+"api/giftshop/update", requestOptions);
        console.log(response);
        return response;
    }
    catch(error){
        console.error('Error updating user:', error);
    }
};