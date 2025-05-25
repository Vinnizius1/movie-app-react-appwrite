const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMoviesAPI = async (query = "") => {
  // O valor padrão para query é uma string vazia, o que significa que, se nenhum valor for passado, a função buscará todos os filmes.
  // O encodeURIComponent é usado para garantir que a string de consulta seja codificada corretamente para uso em uma URL.
  try {
    const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

    //...
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    // "[]" Adicionado para proteção extra contra undefined/null
    return data.results || [];
  } catch (error) {
    console.error(`Error feching movies: ${error.message}`);
    // Re-lança o erro para que o chamador possa tratá-lo
    throw error;
  }
};

/* Removidos setIsLoading, setMovieList, setErrorMessage daqui. A função agora é "pura" em termos de estado do React. */
