import "./App.css";
import { useState } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import ArranStrangeFavicon from "./favicon.ico";
import AnimatedRoutes from "./components/hooks/animated-routes/animated-routes";
import Favicon from "react-favicon";

function App() {
  // Initialize the favicon URL state
  // with the default favicon
  const [faviconUrl, setFaviconUrl] = useState(ArranStrangeFavicon);

  return (
    <div className="App">
      <Favicon url={faviconUrl} />
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
