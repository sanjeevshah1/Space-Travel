import {useOutletContext } from "react-router-dom";
import { planetType } from "../../types";
const Titan = () => {
    const planets:planetType[] = useOutletContext()
    const planet:planetType = planets[3];
  return (
    <div className="planet-content flow text-center">
        <h2 className="uppercase fs-700 ff-serif">{planet.name}</h2>
        <p className="fs-400 letter-spacing-2 text-accent">{planet.description}</p>
        <div className="distance">
            <p className="fs-400 uppercase text-accent">AVG. DISTANCE</p>
            <p className="fs-600 ff-serif uppercase">{planet.distance}</p>
        </div>
        <div className="time">
            <p className="fs-400 uppercase text-accent">EST. travel time</p>
            <p className="fs-600 ff-serif uppercase">{planet.travel}</p>
        </div>
    </div>
  )
}

export default Titan