const API_URL = `${import.meta.env.VITE_API_URL}/users`;

export const getUsersService = async () => {
  const response = await fetch(API_URL + "/");
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();
  return data;
};

export const registerServive = async (data) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name_user: data.name_user,
      email: data.email,
      password: data.password,
    }),
  });
  const result = await response.json();
  return { ok: response.ok, data: result };
};
