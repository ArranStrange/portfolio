import "./frontend.css";

function FrontendMiddle() {
  return (
    <div className="frontend-middle-container">
      <div className="images-first-row">
        <iframe
          className="frontend-photos"
          src="https://www.youtube.com/embed/Xrgddey8jcA"
          title="Stop Using Create React App"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <iframe
          className="frontend-photos"
          src="https://www.youtube.com/embed/J_5zLDLVCsk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photos"
          alt="portrait"
        />
      </div>
      <div className="images-second-row">
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photos"
          alt="portrait"
        />
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photos"
          alt="portrait"
        />
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photos"
          alt="portrait"
        />
        <img
          src="https://i.pinimg.com/564x/96/be/43/96be436e8b88d6313046bea9b17c2547.jpg"
          className="frontend-photos"
          alt="portrait"
        />
      </div>
    </div>
  );
}

export default FrontendMiddle;
