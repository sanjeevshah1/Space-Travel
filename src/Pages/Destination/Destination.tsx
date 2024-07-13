import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Moon from "./../../assets/destination/image-moon.webp";
import Mars from "./../../assets/destination/image-mars.webp";
import Europa from "./../../assets/destination/image-europa.webp";
import Titan from "./../../assets/destination/image-titan.webp";
import data from "../../data";
import { planetType, imagesType, PlanetNames } from "../../types";

const images:imagesType = {
  Moon,
  Mars,
  Europa,
  Titan,
};

const Destination = () => {
  const planets: planetType[] = data.destinations;
  const [currentPlanet, setCurrentPlanet] = useState(planets[0]);

  const handleNavClick = (planet: planetType) => {
    setCurrentPlanet(planet);
  };

  return (
    <div className="destination">
      <div className="pick-div">
        <p className="numbered-title">
          <span>01</span>Pick your destination
        </p>
        <img src={images[currentPlanet.name as PlanetNames]} alt={`${currentPlanet.name}-image`} />
      </div>
      <div className="nav-div">
        <nav>
          <ul className="planet-nav underline-indicators flex">
            {planets.map((planet) => (
              <li key={planet.name}>
                <NavLink 
                  to={planet.name.toLowerCase()}
                  state={{ page: "destination"}}
                  aria-selected={currentPlanet.name === planet.name}
                  rel="path"
                  end
                  className={({ isActive }) =>
                    `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? "active" : ""}`
                  }
                  onClick={() => handleNavClick(planet)}
                >
                  {planet.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Outlet context={planets} />
    </div>
  );
};

export default Destination;
