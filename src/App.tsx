import "./App.css";

import NavBar from "./components/nav-bar/nav-bar";

import AnimatedRoutes from "./components/hooks/animated-routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
