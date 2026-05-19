import "./styles.css";
import fotoPerfil from "../../assets/perfil.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* 📦 COLUNA DA ESQUERDA: Textos e Botões */}
        <div className="hero-text-side">
          <div className="status-badge">
            <span className="status-dot"></span>
            <p className="status-text">
              <strong>Status Atual:</strong> Atualizando meu portfólio e focado
              em projetos práticos para aprimorar minhas habilidades em
              desenvolvimento web.
            </p>
          </div>

          <h1>
            Olá, me chamo <span className="highlight">Luciano dos Santos</span>
          </h1>
          <h2>Desenvolvedor Fullstack & Analista de Sistemas</h2>

          <div className="about-tag">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou
              vivenciando com muito entusiasmo minha transição de carreira para
              a área de tecnologia. Através da faculdade e de uma formação
              intensiva fullstack no DevClub, tenho me dedicado diariamente a
              transformar desafios em linhas de código, focado em construir
              soluções modernas tanto para o front-end quanto para o back-end.
            </p>
            <p>
              Atualmente, estou focado em dominar e praticar tecnologias como
              HTML, CSS, JavaScript, React e Node.js. Sou movido pela
              curiosidade e estou constantemente disposto a aprender novas
              ferramentas, metodologias e conceitos para evoluir como
              desenvolvedor e agregar valor real a projetos inovadores.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#projetos" className="btn-primary">
              Meus Projetos
            </a>
            <a
              href="https://www.linkedin.com/in/lucinodossantos"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* 📸 COLUNA DA DIREITA: Foto */}
        <div className="hero-image-side">
          <div className="profile-image-wrapper">
            <img
              src={fotoPerfil}
              alt="Luciano dos Santos"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
