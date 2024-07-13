import { motion, AnimatePresence } from "framer-motion";
import { useLocation, NavLink, Outlet } from 'react-router-dom';
import Moon from './../../assets/destination/image-moon.webp';
import Mars from './../../assets/destination/image-mars.webp';
import Europa from './../../assets/destination/image-europa.webp';
import Titan from './../../assets/destination/image-titan.webp';
import data from '../../data';
import { planetType, imagesType, PlanetNames } from '../../types';

const images: imagesType = {
  Moon,
  Mars,
  Europa,
  Titan,
};

const Destination = () => {
  const location = useLocation();
  const planets: planetType[] = data.destinations;

  // Determine the current planet based on the path
  const currentPlanetName = location.pathname.split('/').pop() || 'moon'; // default to 'moon' if not found
  const currentPlanet = planets.find((planet) => planet.name.toLowerCase() === currentPlanetName) || planets[0];

  return (
    <div className="destination">
      <div className="pick-div">
        <p className="numbered-title">
          <span>01</span>Pick your destination
        </p>
        <AnimatePresence>
          <motion.img
            key={currentPlanet.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={images[currentPlanet.name as PlanetNames]} 
            alt={`${currentPlanet.name}-image`} 
          />
        </AnimatePresence>
      </div>
      <div className="nav-div">
        <nav>
          <ul className="planet-nav underline-indicators flex">
            {planets.map((planet) => (
              <li key={planet.name}>
                <NavLink
                  to={planet.name.toLowerCase() === "moon" ? "." : planet.name.toLowerCase()}
                  state={{ page: 'destination' }}
                  aria-selected={currentPlanet.name === planet.name}
                  end
                  className={({ isActive }) =>
                    `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? 'active' : ''}`
                  }
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
