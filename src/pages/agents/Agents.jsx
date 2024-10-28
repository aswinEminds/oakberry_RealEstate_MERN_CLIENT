import React, { useEffect, useState } from "react";
import HeroSectionCard from "../../components/cards/HeroSectionCard/HeroSectionCard";
import AgentCard from "../../components/cards/agentcard/AgentCard";
import "./agents.css";
import { getAgents } from "../../api/agents_api";

function Agents() {
  var a = [1, 2, 3, 4, 5, 6, 6, 8, 8, 9, 0, 0, 0];

  const [agentsData, setAgentsData] = useState([]);

  useEffect(() => {
    const getAgentsData = async () => {
      const data = await getAgents();
      console.log(data);
      setAgentsData(data);
    };
    getAgentsData();
  }, []);

  return (
    <div className="agents-parent">
      <HeroSectionCard pageName={"Our Agents"} />
      <section className="agents-section container">
        {agentsData.map((agent) => (
          <div className="agents">
            <AgentCard agentsData={agent} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Agents;
