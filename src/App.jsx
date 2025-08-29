
import './App.css';
import Confetti from './Confetti';
import MusicPlayer from './MusicPlayer';
import { useState } from 'react';

function App() {
  // Sugerencias: modo oscuro, mensaje sorpresa, confeti, animaciones, accesibilidad
  const [darkMode, setDarkMode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSurprise = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div style={{position:'fixed',top:10,right:10,zIndex:30,display:'flex',flexDirection:'column',gap:'10px',alignItems:'flex-end'}}>
        <button
          className="darkmode-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {darkMode ? '🌞 Claro' : '🌙 Oscuro'}
        </button>
        <MusicPlayer />
      </div>
      {showConfetti && <Confetti />}
      <div className="marco">
        <div className="fondo">
          <div className="marco-superior">
            <img src="/images/imagen1.jpg" alt="Gatito 1 en el marco superior" tabIndex={0}/>
            <img src="/images/imagen2.jpg" alt="Gatito 2 en el marco superior" tabIndex={0}/>
            <img src="/images/imagen3.jpg" alt="Gatito 3 en el marco superior" tabIndex={0}/>
            <img src="/images/imagen4.jpg" alt="Gatito 4 en el marco superior" tabIndex={0}/>
          </div>
          <div className="marco-inferior">
            <img src="/images/imagen5.jpg" alt="Gatito 5 en el marco inferior" tabIndex={0}/>
            <img src="/images/imagen6.jpg" alt="Gatito 6 en el marco inferior" tabIndex={0}/>
            <img src="/images/imagen7.jpg" alt="Gatito 7 en el marco inferior" tabIndex={0}/>
            <img src="/images/imagen8.jpg" alt="Gatito 8 en el marco inferior" tabIndex={0}/>
          </div>
          <div className="marco-izquierdo">
            <img src="/images/imagen9.jpg" alt="Gatito 9 en el marco izquierdo" tabIndex={0}/>
            <img src="/images/imagen10.jpg" alt="Gatito 10 en el marco izquierdo" tabIndex={0}/>
            <img src="/images/imagen11.jpg" alt="Gatito 11 en el marco izquierdo" tabIndex={0}/>
            <img src="/images/imagen12.jpg" alt="Gatito 12 en el marco izquierdo" tabIndex={0}/>
          </div>
          <div className="marco-derecho">
            <img src="/images/imagen13.jpg" alt="Gatito 13 en el marco derecho" tabIndex={0}/>
            <img src="/images/imagen14.jpg" alt="Gatito 14 en el marco derecho" tabIndex={0}/>
            <img src="/images/imagen15.jpg" alt="Gatito 15 en el marco derecho" tabIndex={0}/>
            <img src="/images/imagen16.jpg" alt="Gatito 16 en el marco derecho" tabIndex={0}/>
          </div>
        </div>

        <div className="contenido">
          <header>
            <h1 className="animated-title">Feliz cumpleaños princesita</h1>
          </header>
          <main>
            <section className="seccion">
              <p className="animated-text">Querida Sussy, mi estimada de cabellos lindos, y una mirada penetrante:</p>
              <p className="animated-text">Hay días en los que el mundo parece girar más lento, y en esos instantes —entre el café de la mañana y el susurro de la noche— es cuando más pienso en ti. No como un recuerdo lejano, sino como quien espera con ansias la próxima página de su libro favorito. Porque eso eres: una historia que quiero leer con los dedos temblorosos, saboreando cada palabra.</p>
              <p className="animated-text">Te quiero. No como se quiere a las personas pasajeras, sino como se ama el aroma de la lluvia en abril: con nostalgia de lo que aún no termina. Celebro tu existencia y mas en este dia, que es tu dia especial, cuando naciste, esos gestos tuyos que son como faros en mis días grises: cuando te ríes sin reparo, cuando improvisas canciones absurdas o cuando me miras como si el tiempo se hubiera detenido. Eres <strong>presente</strong>, en mayúsculas y a todo volumen.</p>
              <p className="animated-text">Y sí, lo admito: anhelo cosas simples pero profundas. Quiero cocinarte tu comida favorita mientras me cuentas cómo te fue hoy, robarte un beso en la mejilla cuando menos lo esperes, o reírnos hasta que el estómago duela por cualquier tonteria. Quiero ser el refugio donde guardes tus miedos y el primer lugar donde compartas tus alegrías.</p>
              <p className="animated-text"><strong>La distancia quiero decirte que no es incoveniente</strong>, pues porque de igual manera, siempre estare presente para ti, pero de cierta manera, no era suficiente. Necesitaba verte respirar, escuchar cómo pronuncias mi nombre, comprobar que tus manos son tan cálidas como las imaginaba. Por eso, esta no es solo una invitación a mi casa: es un mapa hacia el lugar donde ya no habrá prisas ni despedidas prematuras. Donde podamos construir algo que dure más que un "hola" y un "hasta luego".</p>
              <p className="animated-text">Y aunque sé que la vida es impredecible, hoy elijo creer en los finales felices. O, al menos, en los comienzos honestos. Porque contigo, incluso los silencios saben a verdad, y me alegra hacerte esto, pues es un hecho de que eres importante.</p>
              <p className="animated-text"><strong>Así que aquí estoy, Sussy:</strong><br />
              Con las manos extendidas y queriendo alegrarte el corazon.<br />
              Cuando decidas cruzar esa puerta, prometo recibirte no con flores grandilocuentes, sino con la sinceridad de quien sabe que ha encontrado algo raro y hermoso.</p>
              <p className="animated-text">Hasta entonces, seguiré atesorando cada "buenos días" tuyo como si fuera un tesoro.</p>
              <p className="signature animated-text">Con todo lo que soy,<br />Gus</p>
            </section>
            <button
              className="surprise-btn"
              onClick={handleSurprise}
              aria-label="Mostrar mensaje sorpresa"
              style={{margin:'30px auto',display:'block'}}
            >
              🎁 Mensaje Sorpresa
            </button>
            {showMessage && (
              <div className="sorpresa-mensaje" tabIndex={0}>
                <h2>¡Te quiero mucho, Sussy! 🎉</h2>
                <p>Gracias por existir y por cada momento especial. ¡Feliz cumpleaños!</p>
              </div>
            )}
          </main>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Suggus1899. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
