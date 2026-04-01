import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import claraImg from "../assets/clara.jpg";
import jessicaImg from "../assets/jessica.jpg";
import bungaImg from "../assets/anya.jpg";

export default function Home() {
  const members = [
    {
      name: "Clara Tri Dianingsih",
      nim: "253140707111112",
      img: claraImg,
      path: "/clara",
    },
    {
      name: "Jessica Ester Nolia",
      nim: "253140707111117",
      img: jessicaImg,
      path: "/jessica",
    },
    {
      name: "Bunga Fienya Rochma",
      nim: "253140707111091",
      img: bungaImg,
      path: "/bunga",
    },
  ];

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
    
        <ul>
          {members.map((m, i) => (
            <li key={i}>
              <Link to={m.path}>{m.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CONTENT */}
      <div className="content">
        <p className="badge">👥 TUGAS PEMOGRAMAN WEB</p>

        <h1>Kelompok IMUTT</h1>
        <p className="subtitle">
          Kelas T2-G | Teknologi Informasi 
        </p>

        <div className="cards">
          {members.map((m, i) => (
            <div key={i} className="card">
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>NIM: {m.nim}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}