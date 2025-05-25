import Search from "./components/Search";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = async () => {
    // Setup inicial - fora do try
    /* São operações de setup que devem acontecer independentemente de sucesso ou falha
      Deixa mais claro o fluxo da função
      Separa melhor as responsabilidades do código */
    setIsLoading(true);
    setMovieList([]);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      // "[]" Adicionado para proteção extra contra undefined/null
      setMovieList(data.results || []);

      // ???
      /*       if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
      } */
    } catch (error) {
      console.log(`Error feching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      // O bloco finally é especialmente útil para garantir que setIsLoading(false) seja executado independentemente do resultado da operação.
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You´ll Enjoy
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
