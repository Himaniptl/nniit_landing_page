import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Doubt from "./components/doubt";
import Association from "./components/association";
import "./components/association.css";
import Features from "./components/features";
import ImpactScale from "./components/ImpactScale";
import WallOfLove from "./components/wallOfLove";
import FAQ from "./components/faq";
import Syllabus from "./components/syllabus";
import ExploreOfferings from "./components/ExploreOfferings";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />  
      <ImpactScale/>
      <Features />
      <Association />
      <ExploreOfferings />
      <Doubt />
      <WallOfLove />
      <FAQ />
      <Syllabus/>
      <Footer/>
       
    </div>
  );
}

export default App;
