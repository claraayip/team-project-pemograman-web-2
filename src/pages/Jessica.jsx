import "./jessica.css";
import jessicaImg from "../assets/jessica.jpg";
import { Link } from "react-router-dom";

function Jessica() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">
          <h1 className="nav-logo">JSS.</h1>
          <ul className="nav-links">
            <li><Link to="/">Clara</Link></li>
            <li><Link to="/jessica">Jessica</Link></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container hero-flex">
          
          {/* FOTO */}
          <div className="hero-left">
            <img src={jessicaImg} alt="Jessica" className="profile-img" />
          </div>

          {/* TEXT */}
          <div className="hero-right">
            <p className="hero-subtitle">UI/UX Designer • IT Student</p>

            <h1 className="hero-title">
              JESSICA <span>ESTER NOLIA</span>
            </h1>

            <p className="hero-tagline">
              "Designing simple and meaningful user experiences"
            </p>

            <p className="hero-desc">
              Saya merancang produk digital yang sederhana, intuitif, dan bermakna,
              dengan fokus pada kebutuhan dan kenyamanan pengguna.
            </p>

            <div className="hero-buttons">
              <a href="#project" className="btn primary">View My Work</a>
              <a href="#contact" className="btn outline">Contact Me</a>
            </div>
          </div>
        </div>

        {/* BIODATA */}
        <div className="container">
          <div className="biodata-card">
            <h2>Biodata</h2>

            <div className="biodata-grid">

              <div className="biodata-item">
                <span>👤</span>
                <div>
                  <p className="label">Nama</p>
                  <p>Jessica Ester Nolia</p>
                </div>
              </div>

              <div className="biodata-item">
                <span>💻</span>
                <div>
                  <p className="label">Program Studi</p>
                  <p>Information Technology</p>
                </div>
              </div>

              <div className="biodata-item">
                <span>🎓</span>
                <div>
                  <p className="label">Universitas</p>
                  <p>Universitas Brawijaya</p>
                </div>
              </div>

              <div className="biodata-item">
                <span>📍</span>
                <div>
                  <p className="label">Domisili</p>
                  <p>Bekasi, Jawa Barat</p>
                </div>
              </div>

              <div className="biodata-item">
                <span>📘</span>
                <div>
                  <p className="label">Kelas</p>
                  <p>T2G</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="about-section">
        <div className="container">
          <h2>Tentang Saya</h2>

          <p>
            Saya merupakan mahasiswa Teknologi Informasi di Universitas Brawijaya
            dengan minat pada bidang Desain UI/UX, Desain Produk, dan Analisis Sistem.
          </p>

          <p>
            Dengan pendekatan yang berpusat pada pengguna, saya berupaya menciptakan
            pengalaman yang sederhana, intuitif, dan bermakna.
          </p>

          <div className="skill-list">
            <div className="skill-item">🛠️ UI/UX Designer</div>
            <div className="skill-item">📦 Product Designer</div>
            <div className="skill-item">🔗 System Analyst</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="container">
          <h2>Pengalaman & Kepemimpinan</h2>

          <div className="experience-grid">
            <div className="experience-card">
              <h3>Organisasi</h3>
              <ul>
                <li>PMK - HUMAS</li>
                <li>HIMA TI - Medinfo</li>
                <li>Delegasi PSDM - Ketua DDM</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Eksternal</h3>
              <p>KLUB NOVO</p>
            </div>

            <div className="experience-card">
              <h3>Kepanitiaan</h3>
              <ul>
                <li>Natal PMK - DDM</li>
                <li>Paskash PMK - Ketua DDM</li>
                <li>Comprof - Humas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Kontak</h2>

          <div className="contact-grid">

            <div className="contact-card">
              <h3>Hubungi Saya</h3>
              <p>📞 082114071410</p>
              <p>✉️ jessicanolia14@gmail.com</p>

              <p><a href="https://www.instagram.com/jenoliaaa" target="_blank" rel="noopener noreferrer">Instagram</a></p>
              <p><a href="https://www.linkedin.com/in/jessica-ester-nolia-108085378" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p><a href="https://github.com/claraayip/team-project-pemograman-web-2.git" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>

            <div className="contact-cta">
              <h3>Mari Berkolaborasi 🚀</h3>
              <p>Tertarik bekerja sama? Hubungi saya sekarang!</p>

              <a href="mailto:jessicanolia14@gmail.com" className="email-btn">
                Kirim Email
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Jessica;