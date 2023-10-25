import { Link } from "react-router-dom";
import "./styles.css";

export default function SingUp() {
  return (
    <div className="singup">
      SingUp{" "}
      <button type="submit">
        {" "}
        <Link to="/SingIn">Sair</Link>
      </button>
    </div>
  );
}
