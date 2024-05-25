const API_URL = `${import.meta.env.VITE_API_URL}/users`;

//http:localhost/api/user/login

export const loginService = async (data) => {
    return await fetch(API_URL + "/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ "email": data.email, "password": data.password }),
    });
}