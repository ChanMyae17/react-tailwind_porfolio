import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skill from "./components/Skill";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skill/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
