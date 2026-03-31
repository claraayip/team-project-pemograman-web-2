import "./clara.css";
import claraImg from "../assets/clara.jpg";
import { Link } from "react-router-dom";

function Clara() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur bg-white/70 border-b border-gray-200 py-4 z-50">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <h1 className="font-bold text-lg text-[#1B263B]">CTD.</h1>

          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            <li><Link to="/">Clara</Link></li>
            <li><Link to="/jessica">Jessica</Link></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="flex flex-col items-center justify-center pt-28 pb-12 text-center bg-gradient-to-b from-[#0b048c] to-[#E8EEF5]">

        <img
          src={claraImg}
          alt="Clara"
          className="w-48 h-60 object-cover rounded-2xl shadow-xl mb-6"
        />

        <h1 className="text-4xl font-bold text-[#1B263B] mb-2">
          Clara Tri Dianingsih
        </h1>

        <h2 className="text-sm uppercase tracking-wider text-[#415A77] font-semibold mb-2">
          Teknologi Informasi @Universitas Brawijaya
        </h2>

        <p className="text-gray-500">
          Simple Design, Smarter Experiences
        </p>
      </header>

      {/* BIODATA PREMIUM */}
      <section className="px-5 pb-20 bg-gradient-to-b from-[#E8EEF5] to-[#F6F5F1]">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100">

          <h2 className="text-xl font-semibold text-[#1B263B] mb-8 text-center">
            Profile
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

            {/* ITEM */}
            <div className="group p-4 rounded-xl hover:bg-[#1B263B]/5 transition">
              <div className="flex justify-center mb-2 text-[#1B263B]">
                {/* USER ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400">Nama</p>
              <p className="font-medium">Clara Tri Dianingsih</p>
            </div>


            <div className="group p-4 rounded-xl hover:bg-[#1B263B]/5 transition">
              <div className="flex justify-center mb-2 text-[#1B263B]">
                {/* ID ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"/>
                  <circle cx="8" cy="10" r="2"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400">NIM</p>
              <p className="font-medium">253140707111112</p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-[#1B263B]/5 transition">
              <div className="flex justify-center mb-2 text-[#1B263B]">
                {/* CLASS ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="12" rx="2"/>
                  <path d="M8 20h8"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400">Kelas</p>
              <p className="font-medium">T2-G</p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-[#1B263B]/5 transition">
              <div className="flex justify-center mb-2 text-[#1B263B]">
                {/* BOOK ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5V4a2 2 0 0 1 2-2h12"/>
                  <path d="M4 19.5a2.5 2.5 0 0 0 2.5 2.5H20"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400">Jurusan</p>
              <p className="font-medium">Teknologi Informasi</p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-[#1B263B]/5 transition">
              <div className="flex justify-center mb-2 text-[#1B263B]">
                {/* LOCATION ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2"/>
                </svg>
              </div>
              <p className="text-xs text-gray-400">Domisili</p>
              <p className="font-medium">Bekasi, Jawa Barat Indonesia</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#F6F5F1]">
        <div className="max-w-4xl mx-auto px-5">

          <div className="bg-[#1B263B] text-white rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>

            <p className="text-gray-200 leading-relaxed">
              Halo! Saya adalah mahasiswa Teknologi Informasi Fakultas Vokasi Universitas Brawijaya. 
              Sebagai seorang mahasiswa yang antusias di dunia digital, saya memili minat mendalam pada bidang Pengembangan Web dan UI/UW Design. 
              Saya yakin bahwa sebuah platform ada dari keseimbangan antara tampilan yang memikat dan peforma yang stabil. 
              Saat ini, saya aktif mempelajari dasar-dasar pengembangan front-end serta prinsip desain yang berpusat pada pengguna 
              untuk menciptakan antarmuka yang tidak hanya cantik secara visual, tetapi juga mudah digunakan dan juga berguna untuk pengguna. 
              Ketertarikan saya bermula dari ingin tahu bagaimana sebuah website nyaman saat digunakan. 
              Fokus utama saya Adalah menciptakan karya digital yang ramah untuk semua orang dan benar-benar membantu mereka sehari-hari. 
              Saya berkomitmen untuk terus berkembang agar bisa menciptakan solusi digital yang bermanfaat bagi banyak orang.
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="bg-white text-[#1B263B] px-4 py-1 rounded-full text-sm">
                Web Development
              </span>
              <span className="bg-white text-[#1B263B] px-4 py-1 rounded-full text-sm">
                UI/UX Design
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
<footer className="text-center py-10 bg-[#F6F5F1]">
  <h2 className="text-xl font-semibold text-[#1B263B]">
    Let's Connect
  </h2>

  {/* ICON */}
  <div className="flex justify-center gap-6 mt-4 items-center">

    {/* 👉 GANTI LINK DI SINI */}
    <a href="https://www.linkedin.com/in/clara-dianingsih?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" stroke="#1B263B" strokeWidth="2"/>
        <rect x="2" y="9" width="4" height="12" stroke="#1B263B" strokeWidth="2"/>
        <circle cx="4" cy="4" r="2" stroke="#1B263B" strokeWidth="2"/>
      </svg>
    </a>

    <a href="https://github.com/claraayip" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#1B263B" strokeWidth="2"/>
      </svg>
    </a>

    <a href="claraaa3up@student.ub.ac.id">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1B263B" strokeWidth="2"/>
        <path d="M22 6l-10 7L2 6" stroke="#1B263B" strokeWidth="2"/>
      </svg>
    </a>

  </div>

  <p className="text-sm text-gray-400 mt-4">
    © 2026 Clara Tri Dianingsih
  </p>
</footer>
    </>
  );
}

export default Clara;