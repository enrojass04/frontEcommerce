const API_URL = `${import.meta.env.VITE_API_URL}/orders`;

// Crear una orden
export const createOrderService = async (orderData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error creando la orden");
  }
  const createdOrder = await response.json();
  return createdOrder;
};

// Obtener todas las órdenes
export const getAllOrdersService = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const orders = await response.json();
  return orders;
};

// Obtener una orden por ID
export const getOrderByIdService = async (orderId) => {
  const response = await fetch(`${API_URL}/${orderId}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error obteniendo la orden");
  }
  const order = await response.json();
  return order;
};

// Obtener órdenes por ID de usuario
export const getOrdersByUserIdService = async (userId) => {
  const response = await fetch(`${API_URL}/user/${userId}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error obteniendo las órdenes del usuario");
  }
  const orders = await response.json();
  return orders;
};
