function Anya() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      padding: "40px 20px", 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",  // 💖 Pink gradient
      color: "#333",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.9)",
        padding: "30px",
        borderRadius: "25px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 15px 35px rgba(255, 105, 180, 0.3)",  // 💕 Pink shadow
        border: "1px solid rgba(255, 192, 203, 0.5)"
      }}>
        <h1 style={{ 
          fontSize: "2.8rem", 
          textAlign: "center", 
          marginBottom: "15px",
          background: "linear-gradient(45deg, #ff69b4, #ff1493, #ff1493, #ff69b4)",  // 💖 Hot pink gradient
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 0 20px rgba(255, 105, 180, 0.5)"
        }}>
          Bunga Fienya Rochma 🌸
        </h1>
        <p style={{ 
          textAlign: "center", 
          fontSize: "1.3rem", 
          color: "#ff69b4",  // 💕 Pink text
          fontWeight: "500",
          marginBottom: "40px" 
        }}>
          Teknologi Informasi Student @ Universitas Brawijaya
        </p>
        
        <section style={{marginBottom: "35px"}}>
          <h2 style={{ 
            color: "#ff1493",  // 💖 Deep pink
            borderBottom: "3px solid #ffb6c1",  // 💕 Light pink border
            paddingBottom: "12px",
            marginBottom: "25px",
            fontSize: "1.8rem"
          }}>
            👩‍💻 About Me
          </h2>
          <p style={{ 
            lineHeight: "1.9", 
            fontSize: "1.15rem",
            color: "#555"
          }}>
            Saya adalah mahasiswa Teknologi Informasi dengan <br/>
            Passionate di Web Development, UI/UX Design, dan Data Analysis.
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: "#ff1493",
            borderBottom: "3px solid #ffb6c1",
            paddingBottom: "12px",
            marginBottom: "25px",
            fontSize: "1.8rem"
          }}>
            📞 Contact
          </h2>
          <div style={{display: "grid", gap: "18px"}}>
            <p style={{margin: 0, fontSize: "1.1rem"}}>
              📧 <a href="mailto:bungafienyaa@gmail.com" style={{
                color: "#ff69b4", 
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s"
              }}>bungafienyaa@gmail.com</a>
            </p>
            <p style={{margin: 0, fontSize: "1.1rem"}}>
              💼 Instagram: <a href="https://instagram.com/fienyaa" style={{
                color: "#ff69b4",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s"
              }}>instagram.com/fienyaa</a>
            </p>
            <p style={{margin: 0, fontSize: "1.1rem", color: "#ff69b4"}}>
              📍 Malang, Jawa Timur, Indonesia 
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Anya;