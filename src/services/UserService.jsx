const API_URL = `${import.meta.env.VITE_API_URL}/users`;
const API_URL_ROLES = `${import.meta.env.VITE_API_URL}/roles`;

export const getUsersService = async () => {
  const [usersResponse, rolesResponse] = await Promise.all([
    fetch(API_URL + "/"),
    fetch(API_URL_ROLES + "/"),
  ]);

  if (!usersResponse.ok || !rolesResponse.ok) {
    throw new Error("Error de conexión");
  }

  const usersData = await usersResponse.json();
  const rolesData = await rolesResponse.json();
  const rolesArray = Array.isArray(rolesData.roles) ? rolesData.roles : [];

  const rolesMap = rolesArray.reduce((acc, role) => {
    acc[role.id] = role.name_role;
    return acc;
  }, {});

  console.log(rolesMap);

  const usersWithRoles = usersData.users.map((user) => ({
    ...user,
    name_role: rolesMap[user.id_role],
  }));
  console.log(usersWithRoles);

  return { users: usersWithRoles };
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

export const getUser = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`);
  if (!response.ok) {
    throw new Error("Error al obtener el usuario");
  }
  const data = await response.json();
  return data;
};

export const createUser = async (newUser) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error("Error al crear el Usuario");
  }
  const createdUser = await response.json();
  return createdUser;
};

export const updateUser = async (userId, updateUser) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
  });
  if (!response.ok) {
    throw new Error("Error al actualizar el usuario");
  }
  const updatedUser = await response.json();
  return updatedUser;
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el usuario");
  }
  return response.json();
};
