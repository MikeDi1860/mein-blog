import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      <Footer />

    </> 
  );
}

export default App
