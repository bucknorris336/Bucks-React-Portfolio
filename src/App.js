import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Container className="mb-5 mx-3">
            <Routes>
              <Route exact="true" path="/AboutMe" element={<AboutMe />} />
              <Route exact="true" path="/Portfolio" element={<Portfolio />} />
              <Route exact="true" path="/Contact" element={<Contact />} />
              <Route exact="true" path="/Resume" element={<Resume />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
