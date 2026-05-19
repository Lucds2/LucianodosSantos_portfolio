import "./styles.css";

// 1. IMPORTAÇÕES DAS IMAGENS DOS 6 PROJETOS REAIS
import imgJokenpo from "../../assets/jokenpo.png";
import imgBodas from "../../assets/bodasdeouro.png";
import imgConversor from "../../assets/conversor_de_moedas.png";
import imgNewCar from "../../assets/newcar.png";
import imgSophie from "../../assets/sophie_lumiere.png";
import imgTradutor from "../../assets/tradutor_online.png";

function Projects() {
  // 2. LISTA DE PROJETOS
  const listaProjetos = [
    {
      id: 1,
      link: "https://lucds2.github.io/Jokenpo/",
      titulo: "Jokenpô",
      tecnologias: "HTML • CSS • JavaScript",
      imagem: imgJokenpo,
      descricao:
        "O clássico jogo de Pedra, Papel ou Tesoura desenvolvido com lógica interativa contra a máquina.",
    },
    {
      id: 2,
      link: "https://lucds2.github.io/bodasmariaesergio/",
      titulo: "Bodas de Ouro",
      tecnologias: "HTML • CSS",
      imagem: imgBodas,
      descricao:
        "Página convite elegante desenvolvida para convidar e celebrar uma linda história de união.",
    },
    {
      id: 3,
      link: "https://lucds2.github.io/conversordemoedas/",
      titulo: "Conversor de Moedas",
      tecnologias: "JavaScript • APIs",
      imagem: imgConversor,
      descricao:
        "Aplicação útil que realiza a conversão de valores entre diferentes moedas globais em tempo real.",
    },
    {
      id: 4,
      link: "https://lucds2.github.io/newcar/",
      titulo: "NewCar",
      tecnologias: "HTML • CSS • JavaScript",
      imagem: imgNewCar,
      descricao:
        "Interface moderna voltada para o mercado automóvel, focada em design limpo e experiência do usuário.",
    },
    {
      id: 5,
      link: "https://lucds2.github.io/sophie_lumiere_fotos/",
      titulo: "Shophie Lumiere",
      tecnologias: "HTML • CSS",
      imagem: imgSophie,
      descricao:
        "Portfólio responsivo desenvolvido para exibir ensaios fotográficos e capturar memórias visuais de forma elegante.",
    },
    {
      id: 6,
      link: "https://lucds2.github.io/tradutoronline/",
      titulo: "Tradutor Online",
      tecnologias: "JavaScript • APIs",
      imagem: imgTradutor,
      descricao:
        "Ferramenta dinâmica de tradução de textos integrando serviços de comunicação linguística.",
    },
  ];

  // 3. RENDERIZAÇÃO DA SEÇÃO DE PROJETOS COM MAP
  return (
    <section id="projetos" className="projects-section">
      <h2>
        Meus <span>Projetos</span>
      </h2>

      <div className="projects-grid">
        {listaProjetos.map((projeto) => (
          <div key={projeto.id} className="project-card">
            <div className="project-image-container">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="project-img"
              />
            </div>

            <h3>{projeto.titulo}</h3>
            <span className="tech-badge">{projeto.tecnologias}</span>
            <p>{projeto.descricao}</p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Visualizar projeto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
