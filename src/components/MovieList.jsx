import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

function MovieList({ isLoading, errorMessage, movieList }) {
  // É uma verificação para mostrar a mensagem "No movies found" apenas quando não houver outros estados de UI (loading ou erro) ativos.
  const noMoviesFound = !isLoading && !errorMessage && movieList.length === 0;
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
      ) : noMoviesFound ? (
        <div className="flex flex-col items-center justify-center p-8">
          <p className="text-6xl mb-4">🎬</p>
          <p className="text-gray-400 text-lg">
            No movies found. Try a different search term.
          </p>
        </div>
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
