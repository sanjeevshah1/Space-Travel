import {useOutletContext } from "react-router-dom";
import { planetType } from "../../types";
import {motion} from "framer-motion"
const Moon = () => {
    const planets:planetType[] = useOutletContext()
    const planet:planetType = planets[0];
  return (
    <motion.div 
    initial={{ opacity: 0, y: "100vh" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "1vh" }}
    transition={{ duration: 0.1, type:"spring", stiffness:"60" }}
      className="planet-content flow text-center">
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
    </motion.div>
  )
}

export default Moon