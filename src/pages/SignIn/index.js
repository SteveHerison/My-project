import { Link } from "react-router-dom";
import "./styles.css";

export default function SingIn() {
  return (
    <div className="singin">
      <div className="Login-prima">
        <h3>Login</h3>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Senha"></input>
        <button type="submit">
          {" "}
          <Link to="/SingUp">Entrar</Link>
        </button>
        <p>
          Cadastrar <a to="">Clique aqui!</a>
        </p>
      </div>
    </div>
  );
}
