import "./styles.css";

export default function Navbar() {
  return (
    <nav className="container-nav">
      <h1>Steve.dev</h1>
      <div className="menu">
        <ul>
          <li>Descrição</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </div>
    </nav>
  );
}
