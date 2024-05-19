const API_URL = `${import.meta.env.VITE_API_URL}/products`;

export const getProductsService = async () => {
  const response = await fetch(API_URL + "/");
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();
  return data;
};

export const getAProductsPages = async (page) => {
  const response = await fetch(`${API_URL}/pages?page=${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const createProductService = async (newProduct) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error("Error creating product");
  }
  const createdProduct = await response.json();
  return createdProduct;
};

export const updateProductService = async (productId, updatedProductData) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el producto");
    }
    const updatedProduct = await response.json();
    return updatedProduct;
  } catch (error) {
    throw new Error("Error al actualizar el producto: " + error.message);
  }
};

export const deleteProductService = async (productId) => {
  const response = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error deleting product");
  }
  return response.json();
};
