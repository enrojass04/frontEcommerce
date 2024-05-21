const API_URL = `${import.meta.env.VITE_API_URL}/images`;

export const uploadImage = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImagesService = async () => {
    const response = await fetch(API_URL + "/");
    if (!response.ok) {
        throw new Error('Error de conexión');
    }
    const data = await response.json();
    return data;
}

export const getImagesById = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    if (response.status === 404) {
      // Si la respuesta es 404, retornamos un objeto vacío
      return { images: [] , message: "Producto no tiene imagen. Agregar imágenes al producto"};
    }
    if (!response.ok) {
      throw new Error('Error de conexión');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const getAImagesPages = async (page) => {
    const response = await fetch(`${API_URL}/pages?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

export const createImageService = async (newImage) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newImage),
  });
  if (!response.ok) {
    throw new Error("Error creating product");
  }
  const data = await response.json();
  return data;
};
