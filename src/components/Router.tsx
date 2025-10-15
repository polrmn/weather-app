import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Presets from "@/pages/Presets";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presets" element={<Presets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
