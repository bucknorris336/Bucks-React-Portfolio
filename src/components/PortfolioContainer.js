import React, { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Porfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Porfolio") {
      return <Porfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
