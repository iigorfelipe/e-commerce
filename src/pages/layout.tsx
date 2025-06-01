import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="0.5xl:px-[86px] w-full px-2">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
