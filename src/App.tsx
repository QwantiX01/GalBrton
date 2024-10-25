import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Products from "./pages/Products.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="mx-44 mt-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
