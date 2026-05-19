import { useState } from "react";
import "./styles.css";
//Importando os ícones oficiais
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

// 1. ESTRUTURA DO COMPONENTE HEADER COM A POPUP DE CONTATO
function Header() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = (e) => {
    e.preventDefault();
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <header className="site-header">
      {/* 💻barra tecnológica superior */}
      <div className="tech-top-bar">
        <span className="code-text">PORTFÓLIO // DEVELOPER FULLSTACK</span>
      </div>

      {/* 🧭 menu de navegação */}
      <nav className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#" onClick={abrirModal}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* 🚀 ESTRUTURA DA POPUP (MODAL) */}
      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={fecharModal}>
              &times;
            </button>

            <h3>Vamos conversar? 🚀</h3>
            <p>Escolha o melhor canal para entrarmos em contato:</p>

            <div className="modal-links">
              <a
                href="mailto:lucds2.ls@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="modal-item email-link"
              >
                <FaEnvelope className="email-icon" /> Meu Email
              </a>

              <a
                href="https://linkedin.com/in/seu-user"
                target="_blank"
                rel="noreferrer"
                className="modal-item"
              >
                <FaLinkedin className="linkedin-icon" /> LinkedIn
              </a>

              <a
                href="https://wa.me/5541984000638"
                target="_blank"
                rel="noreferrer"
                className="modal-item whatsapp-link"
              >
                <FaWhatsapp className="whatsapp-icon" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
