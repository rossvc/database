const baseURL = "https://ross.fail:3001/";

export const addSupplier = async (itemBody) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemBody),
    };
    const response = await fetch(baseURL + "api/suppliers", requestOptions);
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error adding supplier:", error);
    throw error;
  }
};

export const updateSupplier = async (ID, itemBody) => {
  try {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemBody),
    };
    const response = await fetch(
      baseURL + `api/suppliers/${ID}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error updating gift shop item:", error);
    throw error;
  }
};

export const getAllSuppliers = async () => {
  try {
    const response = await fetch(baseURL + "api/suppliers");
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error getting suppliers:", error);
    throw error;
  }
};

export const deleteSupplier = async (id) => {
  try {
    const response = await fetch(baseURL + `api/suppliers/${id}`, {
      method: "DELETE",
      headers: {'Content-Type':'application/json'}
    });

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
