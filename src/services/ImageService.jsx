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
      // Devuelve una lista vacía si no se encuentran imágenes
      return { images: [] };
    }
    if (!response.ok) {
      throw new Error('Error de conexión');
    }
    const data = await response.json();
    console.log('estoy en el servicio');
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error de conexión');
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
