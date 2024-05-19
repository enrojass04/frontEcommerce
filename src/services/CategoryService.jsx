const API_URL = `${import.meta.env.VITE_API_URL}/categories`;

export const getCategoriesService = async () => {
    const response = await fetch(API_URL + "/");
    if (!response.ok) {
      throw new Error('Error de conexión');
    }
    const { categories } = await response.json();
    return categories || []; // Devuelve un array vacío si no hay categorías
  };

export const getCategory = async (categoryId) => {
  const response = await fetch(`${API_URL}/${categoryId}`);
  if (!response.ok) {
    throw new Error('Error al obtener la categoría');
  }
  const data = await response.json();
  return data;
};

export const createCategory = async (newCategory) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  });
  if (!response.ok) {
    throw new Error('Error al crear la categoría');
  }
  const createdCategory = await response.json();
  return createdCategory;
};

export const updateCategory = async (categoryId, updatedCategoryData) => {
  const response = await fetch(`${API_URL}/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCategoryData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la categoría');
  }
  const updatedCategory = await response.json();
  return updatedCategory;
};

export const deleteCategory = async (categoryId) => {
  const response = await fetch(`${API_URL}/${categoryId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error('Error al eliminar la categoría');
  }
  return response.json();
};
