// CSS
import "./App.css";

// ICONS
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>GitHub Finder</h1>
      <div className="app-container">
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className="search">
          <input type="text" placeholder="digite o nome do usuário..." />
          <button>
            <span>
              <FaSearch />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
