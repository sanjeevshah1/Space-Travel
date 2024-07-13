import moon from "./../../assets/destination/image-moon.webp"
import data from "../../data";
import { planetType } from "../../types";
import { NavLink, Outlet} from "react-router-dom";
const Destination = () => {
  const planets:planetType[] = data.destinations;
  return (
    <div className="destination">
      <div className="pick-div">
        <p className="numbered-title"><span>01</span>Pick your destination</p>
        <img src={moon} alt="moon-image" />
      </div>
      <div className="nav-div">
        <nav  className="">
            <ul className="planet-nav underline-indicators flex">
              <li>
                <NavLink to="." 
                state={{page:"destination" }} 
                aria-selected={true}
                rel="path"
                end
                 className={({isActive}) => {
                  return `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? "active" : ""}`
                 }}>
                Moon
                </NavLink>
              </li>
              <li>
                <NavLink to="mars" 
                 state={{page:"destination"}}  
                className={({isActive}) => {
                  return `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? "active" : ""}`
                 }}>
                Mars
                </NavLink>
              </li>
              <li>
                <NavLink to="europia" 
                 state={{page:"destination"}}  
                className={({isActive}) => {
                  return `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? "active" : ""}`
                 }}>
                Europia
                </NavLink>
              </li>
              <li>
                <NavLink to="titan" 
                 state={{page:"destination"}}  
                className={({isActive}) => {
                  return `ff-sans-cond uppercase text-white letter-spacing-2 ${isActive ? "active" : ""}`
                 }}>
                Titan
                </NavLink>
              </li>
            </ul>
        </nav>
      </div>
      <Outlet context={planets}/>
    </div>
  )
}

export default Destination