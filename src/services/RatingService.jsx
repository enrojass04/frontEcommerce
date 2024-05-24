const API_URL = `${import.meta.env.VITE_API_URL}/ratings`;

// Obtener todas las calificaciones
export const getRatingsService = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();
  return data.ratings;
};

// Obtener una calificación por ID
export const getRatingService = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Error de conexión o no existe una calificación con el id ${id}`);
  }
  const data = await response.json();
  return data.rating;
};

// Crear una nueva calificación
export const createRatingService = async (newRating) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRating),
  });
  if (!response.ok) {
    throw new Error("Error creando la calificación");
  }
  const createdRating = await response.json();
  return createdRating;
};

// Actualizar una calificación existente
export const updateRatingService = async (id, updatedRatingData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedRatingData),
  });
  if (!response.ok) {
    throw new Error("Error actualizando la calificación");
  }
  const updatedRating = await response.json();
  return updatedRating;
};

// Eliminar una calificación
export const deleteRatingService = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error eliminando la calificación");
  }
  return response.json();
};

// Obtener calificaciones por producto
export const getRatingsByProductService = async (id_product) => {
  const response = await fetch(`${API_URL}/product/${id_product}`);
  if (!response.ok) {
    throw new Error(`Error de conexión o no existen calificaciones para el producto con id ${id_product}`);
  }
  const data = await response.json();
  return data.ratings;
};
