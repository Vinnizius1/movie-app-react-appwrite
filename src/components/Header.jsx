import Search from "./Search";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header>
      <img src="./hero.png" alt="Hero Banner" />
      <h1>
        Find <span className="text-gradient">Movies</span> You´ll Enjoy
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}

export default Header;
// O componente Header agora é responsável apenas pela apresentação e não tem lógica de estado ou efeitos colaterais.
// Isso o torna mais fácil de testar e reutilizar.
