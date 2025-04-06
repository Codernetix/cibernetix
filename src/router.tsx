import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import MainPage from "./pages/MainPage";

const AppRouter = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<h1 />} />
    </Route>
    </Routes>
  </Router>
);

export default AppRouter;
