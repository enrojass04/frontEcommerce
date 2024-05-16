const API_URL = `${import.meta.env.VITE_API_URL}/categories`;

export const getCategoriesService = async() => {
    const response = await fetch(API_URL + "/");
    if (!response.ok) {
        throw new Error('Error de conexión');
    }
    const data = await response.json();
    return data;
}
