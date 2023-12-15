// import React, { useState, useEffect } from "react";
import "./git-hub.css";

// interface Repository {
//   id: number;
//   name: string;
//   html_url: string;
// }

function GitHubMiddle() {
  // const [repositories, setRepositories] = useState<Repository[]>([]);
  // const username = "arranstrange";
  // const token = "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";

  // useEffect(() => {
  //   async function fetchRepositories() {
  //     try {
  //       const response = await fetch(
  //         `https://api.github.com/users/${username}/repos`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const data: Repository[] = await response.json();
  //       setRepositories(data);
  //     } catch (error) {
  //       console.error("Error fetching repositories:", error);
  //     }
  //   }

  //   fetchRepositories();
  // }, [username, token]);

  return (
    <div className="about-me-middle-container">
      <div className="about-me-middle-content">
        {/* <div>
          <h2>GitHub Repositories</h2>
          <ul className="repositories-list">
            {epositories.map((repo) => (
              <li className="repositories" key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default GitHubMiddle;
