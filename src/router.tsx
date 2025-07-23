import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./views/MainPageLayout";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<h1 />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
