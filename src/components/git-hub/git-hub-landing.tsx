import "./git-hub.css";

function GitHublanding() {
  return (
    <div className="git-hub-landing-container">
      <div className="git-hub-profile-container">
        <img
          className="git-hub-profile-picture"
          src="https://avatars.githubusercontent.com/u/149064150?v=4"
          alt="github profile picture"
        />
      </div>
      <div className="git-hub-chart-container">
        <img
          src="https://ghchart.rshah.org/<141213>/arranstrange"
          alt="ArranStrange's Github chart"
        />
      </div>
      <div className="git-hub-repos">
        <script src="https://gitlist.himdek.com/GitHubList.js"></script>
      </div>
    </div>
  );
}

export default GitHublanding;
