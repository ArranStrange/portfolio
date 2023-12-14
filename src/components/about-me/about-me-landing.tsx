import "./about-me.css";

function AboutMeLanding() {
  return (
    <div className="about-me-landing-container">
      <div className="about-me-skills-left">
        <ul>Javascript</ul>
        <ul>Typescript</ul>
        <ul>React</ul>
      </div>
      <div className="about-me-image">
        <img
          src="https://i.pinimg.com/564x/96/bd/13/96bd1385044606cade2ad8d4115427d8.jpg"
          className="about-me-photo"
          alt="portrait"
        />
      </div>
      <div className="about-me-skills-right">
        <ul>Node.js</ul>
        <ul>Photoshop</ul>
        <ul>Figma</ul>
      </div>
    </div>
  );
}

export default AboutMeLanding;
