import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

function MovieList({ isLoading, errorMessage, movieList }) {
  // Variável que verifica se não está carregando, não há mensagem de erro e a lista de filmes está vazia
  // É uma verificação para mostrar a mensagem "No movies found" apenas quando não houver outros estados de UI (loading ou erro) ativos.
  // const noMoviesFound = !isLoading && !errorMessage && movieList.length === 0;
  /* !(false) && !(false) && (true) ou seja:
    true && true && true = true 
    Lembrando que uma string vazia é avaliada como false em JavaScript.
    */

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieList;
