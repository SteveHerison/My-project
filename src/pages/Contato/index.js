import "./styles.css";
import Footer from "../Footer/index";
export default function Contato() {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact__content">
          <div class="contact__title">
            <p _msttexthash="99229" _msthash="64">
              contato
            </p>
            <h3 _msttexthash="47856315" _msthash="65">
              Não seja tímido! Bateu em mim! 👇
            </h3>
          </div>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3 _msttexthash="229541" _msthash="66">
                  Localização
                </h3>
                <p _msttexthash="298012" _msthash="67">
                  Belgrado, Sérvia
                </p>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3 _msttexthash="95381" _msthash="68">
                  Correio
                </h3>
                <a
                  href="mailto:stefan.topallovic@gmail.com"
                  _msttexthash="700596"
                  _msthash="69"
                >
                  stefan.topallovic@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
