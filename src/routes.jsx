import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Marlluslist from "./pages/home";
import Footer from "./components/footer";
import MinhasTarefas from "./pages/minhasTarefas";
import Historico from "./pages/historico";
import Dashboard from "./pages/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Marlluslist />} />
        <Route path="/minhastarefas" element={<MinhasTarefas />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/relatoriodedesempenho" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
