// Components
import User from "../components/User";

// Icons
import { FaSearch } from "react-icons/fa";

// Css
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>GitHub Finder</h1>
      <div className="app-container">
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className="search">
          <input type="text" placeholder="Digite o nome do usuário..." />
          <button>
            <span>
              <FaSearch />
            </span>
          </button>
        </div>
      </div>
      <div className="user">
        <User />
      </div>
    </div>
  );
};

export default Home;
