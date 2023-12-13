import "./App.css";

import NavBar from "./components/nav-bar/nav-bar";

import AnimatedRoutes from "./components/hooks/animated-routes";

function App() {
  console.log(window.location.pathname);

  return (
    <div className="App">
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
