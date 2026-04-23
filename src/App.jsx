import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}