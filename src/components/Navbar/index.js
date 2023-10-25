import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <navbar className="container-nav">
      <h1>LoGO</h1>
      <div className="menu">
        <Link to="">Sobre</Link>
        <Link to="">Contato</Link>
        <button>
          {" "}
          <Link to="/SingIn">Login</Link>
        </button>
      </div>
    </navbar>
  );
}
