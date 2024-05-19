const API_URL = `${import.meta.env.VITE_API_URL}/images`;

export const getImagesService = async() => {
    const response = await fetch(API_URL + "/");
    if (!response.ok) {
        throw new Error('Error de conexión');
    }
    const data = await response.json();
    return data;
}

export const getAImagesPages = async (page) => {
    const response = await fetch(`${API_URL}/pages?page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
