import About from "./components/About";
import Contact from "./components/Contact";
// import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import TeamSection from "./components/TeamSection";
import Teams from "./components/Teams";

import Whatwedo from "./components/Whatwedo";

function App() {
  return (
    <div className="App">
       <div><Navbar/></div>
       <div><Home/></div>
       <div ><About/></div>
       <div ><Whatwedo/></div>
       <div><Teams/></div>
       <div ><Contact/></div>
       <div ><SocialLinks/></div>
    </div>
  );
}

export default App;
