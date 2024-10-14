import React from "react";
import HeroSectionCard from "../../components/cards/HeroSectionCard/HeroSectionCard";
import AgentCard from "../../components/cards/agentcard/AgentCard";
import "./agents.css";

function Agents() {
  var a = [1, 2, 3, 4, 5, 6, 6, 8, 8, 9, 0, 0, 0];
  return (
    <div className="agents-parent">
      <HeroSectionCard pageName={"Our Agents"} />
      <section className="agents-section container">
        {a.map((e) => (
          <div className="agents">
            <AgentCard />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Agents;
