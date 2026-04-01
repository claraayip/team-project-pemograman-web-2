import React from "react";
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
          <p>Mahasiswa Teknologi Informasi @ Universitas Brawijaya</p>
        </div>

        {/* CONTENT */}
        <div className="content">

          {/* ABOUT ME */}
          <section>
            <h2>About Me</h2>

            <p>
              Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya
              yang memiliki minat besar dalam bidang pengembangan web, UI/UX design,
              serta analisis data.
            </p>

            <p>
              Dalam proses belajar, saya telah menggunakan HTML, CSS, JavaScript,
              serta React untuk membangun website yang responsif, interaktif,
              dan user-friendly.
            </p>

            <p>
              Saya juga tertarik dalam mendesain antarmuka yang tidak hanya menarik
              secara visual, tetapi juga memberikan pengalaman pengguna yang nyaman
              dan mudah dipahami.
            </p>

            <p>
              Selain kemampuan teknis, saya memiliki kemampuan komunikasi yang baik,
              mampu bekerja secara individu maupun dalam tim, serta terbuka terhadap
              kritik dan saran sebagai bahan evaluasi untuk berkembang.
            </p>

            <p>
              Saya memiliki semangat belajar yang tinggi, disiplin, dan berkomitmen
              untuk terus meningkatkan kemampuan serta menciptakan solusi digital
              yang bermanfaat.
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h2>Skills</h2>
            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </section>

          {/* CONTACT */}
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