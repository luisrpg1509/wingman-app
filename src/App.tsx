import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ReplyPage } from "./pages/ReplyPage";
import { QuestionsPage } from "./pages/QuestionsPage";
import { DatePage } from "./pages/DatePage";
import { GamesPage } from "./pages/GamesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reply" element={<ReplyPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/date" element={<DatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;