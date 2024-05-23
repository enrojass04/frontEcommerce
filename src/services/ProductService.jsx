const API_URL = `${import.meta.env.VITE_API_URL}/products`;
// Obtener productos con sus imágenes asociadas
export const getProductsWithImages = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();

  // Obtener todas las imágenes
  const getimages = await fetch(`${import.meta.env.VITE_API_URL}/images`);
  if (!getimages.ok) {
    throw new Error("Error de conexión al obtener imágenes");
  }
  const imageData = await getimages.json();

  // Asociar imágenes a los productos
  const productsWithImages = data.products.map((product) => {
    const productImages = imageData.images.filter(
      (image) => image.id_product === product.id
    );
    return {
      ...product,
      images: productImages,
    };
  });

  return {
    ...data,
    products: productsWithImages,
  };
};

// Usar getProductsWithImages en lugar de fetch directamente
export const getProductsByCategory = async (categoryId) => {
  return getProductsWithImages(`${API_URL}/category/${categoryId}`);
};

export const getAProductsPages = async (page) => {
  return getProductsWithImages(`${API_URL}/pages?page=${page}`);
};

export const getAProductsPagesAdmin = async (page) => {
  return getProductsWithImages(`${API_URL}/?page=${page}`);
};

// Otros métodos permanecen sin cambios
export const getProductsService = async () => {
  const response = await fetch(API_URL + "/");
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();
  return data;
};

// Obtener imágenes de un producto específico
export const getProductImages = async (productId) => {
  const productData = await getAProduct(productId);
  const getimages = await fetch(`${import.meta.env.VITE_API_URL}/images`);
  if (!getimages.ok) {
    throw new Error("Error de conexión al obtener imágenes");
  }
  const imageData = await getimages.json();
  const productImages = imageData.images.filter(
    (image) => image.id_product === productId
  );

  const completeProductData = {
    ...productData, // Spread product details
    images: productImages, // Add images property
  };
  return completeProductData;
};

export const getAProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Error de conexión");
  }
  const data = await response.json();
  return data;
};

export const createProductService = async (newProduct) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error("Error creando el producto");
  }
  const createdProduct = await response.json();
  return createdProduct;
};

export const updateProductService = async (productId, updatedProductData) => {
  const response = await fetch(`${API_URL}/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProductData),
  });
  if (!response.ok) {
    throw new Error("Error actualizando el producto");
  }
  const updatedProduct = await response.json();
  return updatedProduct;
};

export const deleteProductService = async (productId) => {
  const response = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error eliminando el producto");
  }
  return response.json();
};

export const getimages = async (productId) => {
  await fetch(`${import.meta.env.VITE_API_URL1}${productId}`);
  if (!getimages.ok) {
    throw new Error("Error de conexión al obtener imágenes");
  }
  const imageData = await getimages.json();
  const productImages = imageData.images.filter(
    (image) => image.id_product === productId
  );
};
