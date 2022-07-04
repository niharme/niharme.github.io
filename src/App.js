import { Routes, Route } from "react-router-dom";
import About from "./routes/about/about.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
