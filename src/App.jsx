import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT SEMUA HALAMAN
import Home from "./pages/Home";
import Clara from "./pages/Clara";
import Jessica from "./pages/Jessica";
import Anya from "./pages/Anya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />
</Routes>
        {/* HALAMAN MASING-MASING */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/clara" element={<Clara />} />
  <Route path="/jessica" element={<Jessica />} />
  <Route path="/bunga" element={<Anya />} />
</Routes>
    </BrowserRouter>
  
  );
} 

export default App;