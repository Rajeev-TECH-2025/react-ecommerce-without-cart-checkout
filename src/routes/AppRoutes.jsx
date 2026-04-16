import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/productCategory";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import AllCategory from "../pages/AllCategory";
import MangalsutraSet from "../pages/MangalsutraSet";
import NecklaceSet from "../pages/NecklaceSet";
import AllTypeEarrings from "../pages/AllTypeEarrings";
import BanglesDesignerKada from "../pages/bangles-designer-kada";
import JhumkaCategory from "../pages/JhumkaCategory";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/category/mangalsutra-set" element={<MangalsutraSet />} />
          <Route path="/category/necklace-set" element={<NecklaceSet />} />
          <Route path="/category/all-type-earrings" element={<AllTypeEarrings />} />
          <Route path="/category/bangles-designer-kada" element={<BanglesDesignerKada />} />
          <Route path="/category/jhumkas" element={<JhumkaCategory />} />
          <Route path="/category/all" element={<AllCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}