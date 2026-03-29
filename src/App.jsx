import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clara from "./pages/Clara";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clara" element={<Clara />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;