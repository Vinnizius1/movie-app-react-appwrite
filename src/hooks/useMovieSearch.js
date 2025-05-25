/* Este hook vai encapsular toda a lógica de estado, debounce e chamada à API. */
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { fetchMoviesAPI } from "../services/api";

export function useMovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  /* useDebounce é usado para evitar chamadas excessivas à API enquanto o usuário digita */
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    1000, // Tempo de espera em milissegundos
    [searchTerm]
  );

  /* useEffect é usado para chamar a função fetchMovies quando o "debouncedSearchTerm" muda */
  useEffect(() => {
    // Função assíncrona para buscar os filmes
    const loadMovies = async () => {
      setIsLoading(true);
      setErrorMessage("");

      // try-catch para lidar com erros na chamada da API
      try {
        const movies = await fetchMoviesAPI(debouncedSearchTerm);
        setMovieList(movies);
      } catch (error) {
        setErrorMessage(
          error.message || "Failed to fetch movies. Please try again later."
        );
        setMovieList([]); // Limpa a lista em caso de erro
      } finally {
        setIsLoading(false);
      }
    };

    /*      Chama a função de busca.
     A primeira chamada (montagem) será com debouncedSearchTerm = "", buscando populares. */
    loadMovies();
  }, [debouncedSearchTerm]); // Dependência: executa quando debouncedSearchTerm muda

  /*    Retorna o estado e as funções que o componente App precisará 
   O hook "useMovieSearch" encapsula toda a lógica de estado, debounce e chamada à API.  */
  return {
    searchTerm,
    setSearchTerm,
    movieList,
    isLoading,
    errorMessage,
  };
}
