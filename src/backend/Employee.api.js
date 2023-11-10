const baseURL = "https://ross.fail:3001/";

//THIS GETS ALL THE EMPLOYEES, FOR NON-ADMINS THIS SHOULD USE LOGIN CREDENTIALS TO GET ONLY ONE EMPLOYEE!
export const getAllEmployeeInfo = async () => {
    try {
        const response = await fetch(baseURL+"api/employees");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting all employees:', error);
        throw error;
    }
};

export const getOneEmployeeInfo = async () => {
    let id = document.cookie.replace(/(?:(?:^|.*;\s*)EmployeeID\s*\s*([^;]*).*$)|^.*$/, "$1");
    try {
        const response = await fetch(baseURL+`api/employees/${id}`);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error getting employee', error);
        throw error;
    }

};
