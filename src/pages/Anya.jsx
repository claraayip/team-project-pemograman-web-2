import anyaImg from "../assets/anya.jpg";
import "./Anya.css";


function Anya() {
  return (
    <div className="container">
      <div className="card">

        {/* HEADER */}
        <div className="header">
          <img src={anyaImg} alt="profile" className="profile-img" />
          <h1>Bunga Fienya Rochma</h1>
          <p>Teknologi Informasi Student @ Universitas Brawijaya</p>
        </div>

        {/* CONTENT */}
        <div className="content">

          <section>
            <h2>About Me</h2>
            <p>
              Mahasiswa Teknologi Informasi yang memiliki minat di Web Development,
              UI/UX Design, dan Data Analysis.
            </p>
          </section>

          <section>
            <h2>Skills</h2>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </section>

          <section>
            <h2>Contact</h2>
            <p>📧 bungafienyaa@gmail.com</p>
            <p>📷 instagram.com/fienyaa</p>
            <p>📍 Malang, Indonesia</p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Anya;