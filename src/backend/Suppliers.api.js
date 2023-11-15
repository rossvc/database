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
    });

    if (response.status === 200) {
      // Supplier deleted successfully
      return { success: "Supplier deleted successfully" };
    } else if (response.status === 404) {
      // Supplier not found
      return { error: "Supplier not found" };
    } else {
      // Failed to delete supplier
      return {
        error:
          "This supplier is linked to either an artwork or an art collection, therefore cannot be deleted!",
      };
    }
  } catch (error) {
    console.error("Error deleting supplier:", error);
    throw error;
  }
};
