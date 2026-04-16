import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
}