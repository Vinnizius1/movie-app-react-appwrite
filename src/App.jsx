import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { useMovieSearch } from "./hooks/useMovieSearch";

/*
 * App Component
 * Consumidor principal do hook useMovieSearch que gerencia:
 * - Estados de busca e resultados
 * - Lógica de debounce
 * - Chamadas à API
 */
function App() {
  // Desestruturação dos estados e funções do hook customizado
  // O hook "useMovieSearch" encapsula toda a lógica de estado, debounce e chamada à API.
  const { searchTerm, setSearchTerm, movieList, isLoading, errorMessage } =
    useMovieSearch();

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Condição ternária para mostrar "Results for X" quando houver busca ativa */}
        <section className="all-movies">
          <h2 className="mt-[40px]">
            {searchTerm ? `Results for "${searchTerm}"` : "All Movies"}
          </h2>

          {/* MovieList: Gerencia estados de loading, erro e renderização dos filmes */}
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
