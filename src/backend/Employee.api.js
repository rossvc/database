const baseURL = "https://ross.fail:3001/";

//THIS CURRENTLY GETS ALL THE EMPLOYEES, FOR NON-ADMINS THIS SHOULD USE LOGIN CREDENTIALS TO GET ONLY ONE EMPLOYEE!
export const getAllEmployeeInfo = async () => {
    try {
        const response = await fetch(baseURL+"api/employees");
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