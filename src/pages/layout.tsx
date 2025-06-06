import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="px-container-px">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
