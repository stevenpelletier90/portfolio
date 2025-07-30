import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isHomePage && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
