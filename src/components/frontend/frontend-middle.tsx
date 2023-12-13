import "./frontend.css";

function FrontendMiddle() {
  return (
    <div className="middle-container">
      <div className="frontend-skills-left">
        <ul>Javascript</ul>
        <ul>Typescript</ul>
        <ul>React</ul>
      </div>
      <div className="frontend-image">
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photo"
          alt="portrait"
        />
      </div>
      <div className="frontend-skills-right">
        <ul>CSS</ul>
        <ul>GitHub</ul>
        <ul>VS Code</ul>
      </div>
    </div>
  );
}

export default FrontendMiddle;
