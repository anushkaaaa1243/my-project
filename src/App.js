import "./App.css";
import Books from "./Component/Books";
import ExploreSection from "./Component/ExploreSection";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";


import PlaneSection from "./Component/PlaneSection";
import VideoSection from "./Component/VideoSection";

function App() {
  return (
    <div>
   <Navbar/>
   <HeroSection />
   <PlaneSection />
   <VideoSection />
   <ExploreSection />
   <Books/>
    </div>
  );
}

export default App;
