import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anya from "./pages/Anya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
