import { useRef } from "react";
import "./App.css";
import Sertvico from "./Sertvico";
import Heder from "./Heder";
import Somos from "./Somos";
import Servicios from "./Servicios";
import Contactanos from "./Contactanos";

function App() {
  const sertvicoRef = useRef(null);
  const somosRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactanosRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article>
      <div className="heder">
        <Heder scrollToSection={scrollToSection} refs={{ sertvicoRef, somosRef, serviciosRef, contactanosRef }} />
      </div>
      <section ref={sertvicoRef}>
        <Sertvico />
      </section>
      <section ref={somosRef}>
        <Somos />
      </section>
      <section ref={serviciosRef}>
        <Servicios />
      </section>
      <section ref={contactanosRef}>
        <Contactanos />
      </section>

    <footer>
      <p>Pagina realizada por Publibros <i class='bx bxl-instagram-alt' ></i> </p>
    </footer>
    </article>
  );
}

export default App;
