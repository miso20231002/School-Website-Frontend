import { Outlet } from "react-router-dom"; // 🔥 추가!!
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* 🔥 페이지들이 여기 끼워져 들어옴 */}
      </main>
      <Footer />
    </>
  );
}

