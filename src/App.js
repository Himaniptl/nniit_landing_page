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
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <ImpactScale/>
      <Features />
      <Association />
      <Doubt />
      <WallOfLove />
      <FAQ />
      <Syllabus/>
      <Footer/>
      
    

    </div>
  );
}

export default App;
