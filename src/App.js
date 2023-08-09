import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

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
       <div><Footer/></div>
       <div ><SocialLinks/></div>
    </div>
  );
}

export default App;
