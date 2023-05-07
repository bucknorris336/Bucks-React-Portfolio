import React from "react";
import calm from "../../images/calm.png";
import mealplan from "../../images/mealplan.png";
import techblog from "../../images/techblog.png";
import weather from "../../images/weather.png";

export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="center">Porfolio Page</h1>
      <section className="col-md-4 portfolio-grid">
        <div>
          <h3>calm</h3>
          <a href="https://www.example1.com">
            <img className="img-fluid" src={calm} alt="calm" />
          </a>
          <p>Description for Image 1</p>
        </div>
        <div>
          <h3>mealplan</h3>
          <a href="https://www.example2.com">
            <img className="img-fluid" src={mealplan} alt="mealplan" />
          </a>
          <p>Description for Image 2</p>
        </div>

        <div>
          <h3>techblog</h3>
          <a href="https://www.example3.com">
            <img className="img-fluid" src={techblog} alt="techblog" />
          </a>
          <p>Description for Image 3</p>
        </div>
        <div>
          <h3>weather</h3>
          <a href="https://www.example4.com">
            <img className="img-fluid" src={weather} alt="weather" />
          </a>
          <p>Description for Image 4</p>
        </div>
      </section>
    </div>
  );
}
