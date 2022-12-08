//funcion para hacer la peticion a la API con fetch

export const getNews = async (search, page, pageSize) => {
  const API_KEY = "3276d54c5e244cd3ba432b5590c39c56";
  const API_HOST = "https://newsapi.org/v2/everything";
  try {
    const respuesta = await fetch(
      `${API_HOST}?q=${search}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}&language=es`
    );
    return respuesta.json();
  } catch (error) {
    return { isError: true };
  }
};
