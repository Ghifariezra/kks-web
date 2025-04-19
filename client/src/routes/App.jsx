import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "react-bootstrap";

const MainLayout = lazy(() => import("../layout/mainLayout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  return (
    // Menambahkan ThemeProvider di sini untuk custom breakpoints
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Layout wrapper */}
            <Route path="/" element={<MainLayout />}>
              {/* Nested routes yang akan ditampilkan di <Outlet /> */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
