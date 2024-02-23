import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";
import Intro from "./into";
import ArranStrangeFavicon from "./favicon.ico";
import AnimatedRoutes from "./components/hooks/animated-routes/animated-routes";
import Favicon from "react-favicon";

function App() {
  const faviconUrl = ArranStrangeFavicon;

  return (
    <div id="root" className="App">
      <Intro />
      <Favicon url={faviconUrl} />
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
