import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

import Whatwedo from "./components/Whatwedo";
import { useState, useEffect } from "react";
import video from "./assests/preloader.gif.gif";

function App() {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                     <div className="h-[700px] bg-black flex items-center justify-center lg:h-[900px]">
                <img
                    src={video}
                    className=""
                    alt="preloader video"
                />
                </div>
            ) : (
                <div>
                    <div className="header">
                        <Navbar />
                    </div>
                    <div>
                        <Home />
                    </div>
                    <div>
                        <About />
                    </div>
                    <div>
                        <Whatwedo />
                    </div>
                    <div>
                        <Teams />
                    </div>
                    <div>
                        <Contact />
                    </div>
                    <div>
                        <Footer />
                    </div>
                    <div>
                        <SocialLinks />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
