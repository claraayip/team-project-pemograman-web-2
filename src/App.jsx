import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clara from "./pages/Clara";
import Jessica from "./pages/Jessica"; // tambahin ini

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clara />} />
        <Route path="/jessica" element={<Jessica />} /> {/* tambahin ini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;