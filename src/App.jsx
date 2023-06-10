import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./global/Navbar";
import Home from "./Pages/home/home";
import Preloading from "./Components/Preloading";
import DetailGame from "./Pages/DetailGame/DetailGame";
import PageTransition from "./PageTransition/PageTransition";
import Wishlist from "./Pages/Wishlist/Wishlist";
function App() {
  const [preloading, setPreloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      {preloading ? (
        <Preloading />
      ) : (
        <div className="app">
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detailgame/:id" element={<DetailGame />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </PageTransition>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
