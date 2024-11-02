import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Products from "./pages/Products.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="mx-44 mt-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
