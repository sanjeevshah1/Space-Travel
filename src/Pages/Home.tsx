import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="container home">
      <div className="intro">
        <h1 className="text-accent space fs-400 ff-sans-cond uppercase"> So, you want to travel to
        <span className="fs-800 ff-serif text-white "> Space</span></h1>
        <p className="text-accent letter-spacing-1 fs-200">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience! 
        </p>
      </div>
      
      <div className="button-div">
        <Link to="/../destination"className="large-button uppercase text-dark ff-sans-cond letter-spacing-2">Explore</Link>
      </div>
    </div>
  )
}

export default Home