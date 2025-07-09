import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LearnMore from "./pages/LearnMore";
import Footer from "./components/Footer";
import FloatingImages from "./components/FloatingImages";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
        <FloatingImages />
      </Router>
    </ThemeProvider>
  );
}