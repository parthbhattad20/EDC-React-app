import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import PacmanLoader from "react-spinners/PacmanLoader";

import Whatwedo from "./components/Whatwedo";
import { useState, useEffect } from "react";

function App() {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 3000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <PacmanLoader
                    className="justify-center"
                    color="#36d7b7"
                    loading={loading}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
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
