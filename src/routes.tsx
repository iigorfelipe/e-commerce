import { Routes, Route, Navigate } from "react-router-dom";
import { OrthopedicLine } from "./pages/orthopedic-line";

import { Product } from "./pages/product ";
import { Layout } from "./pages/layout";
import { ScrollToTop } from "./components/scroll-to-top";

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/orthopedic-line" replace />} />
          <Route path="orthopedic-line" element={<OrthopedicLine />} />
          <Route path="orthopedic-line/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};
