import "./design.css";

function DesignMiddle() {
  return (
    <div className="middle-container">
      <div className="design-skills-left">
        <ul>Adobe Photoshop</ul>
        <ul>Adobe Illustrator</ul>
        <ul>Figma</ul>
      </div>
      <div className="design-image">
        <img
          src="https://i.pinimg.com/564x/47/33/e4/4733e41a7da0780e53bd2129a5975dcb.jpg"
          className="design-photo"
          alt="portrait"
        />
      </div>
      <div className="design-skills-right">
        <ul>CSS</ul>
        <ul>Tailwind</ul>
        <ul>SASS</ul>
      </div>
    </div>
  );
}

export default DesignMiddle;
