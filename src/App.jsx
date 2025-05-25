import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { useMovieSearch } from "./hooks/useMovieSearch";

/* Após a refatoração, App consumirá apenas o hook. */
function App() {
  // Usa o custom hook para obter o estado e as funções necessárias
  const { searchTerm, setSearchTerm, movieList, isLoading, errorMessage } =
    useMovieSearch();
  // O hook useMovieSearch encapsula toda a lógica de estado, debounce e chamada à API.
  // Isso torna o componente App mais limpo e fácil de entender.

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <section className="all-movies">
          <h2 className="mt-[40px]">
            {searchTerm ? `Results for "${searchTerm}"` : "All Movies"}
          </h2>

          <MovieList
            isLoading={isLoading}
            errorMessage={errorMessage}
            movieList={movieList}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
