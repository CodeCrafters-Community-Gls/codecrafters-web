import React, { useState } from "react";
import "./ourteams.css";

function OurTeams() {
  const [activeTeam, setActiveTeam] = useState("og");

  return (
    <div className="team-container">
      <div className="head">
        <h2 className="heading1">Meet Our Teams</h2>
        <div className="radio-switch">
          <div
            className={`switch-button ${activeTeam === "og" ? "active" : ""}`}
            onClick={() => setActiveTeam("og")}
          >
            OG
          </div>
          <div
            className={`switch-button ${activeTeam === "core" ? "active" : ""}`}
            onClick={() => setActiveTeam("core")}
          >
            Core
          </div>
          <div className={`slider ${activeTeam}`} />
        </div>
      </div>
      <div className="teams">
        <div className="og-teams">
          <div className="top">
            <div className="team-member">
              <h3>Member 1</h3>
              <p>Role: Developer</p>
            </div>
            <div className="team-member">
              <h3>Member 2</h3>
              <p>Role: Designer</p>
            </div>
            <div className="team-member">
              <h3>Member 3</h3>
              <p>Role: Project Manager</p>
            </div>

          </div>
          <div className="bottom">
            <div className="team-member">
              <h3>Member 4</h3>
              <p>Role: QA Engineer</p>
            </div>
            <div className="team-member">
              <h3>Member 5</h3>
              <p>Role: UX Researcher</p>
            </div>
            <div className="team-member">
              <h3>Member 6</h3>
              <p>Role: DevOps Engineer</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeams;