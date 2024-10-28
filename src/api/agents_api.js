import axios from "axios";

export const getAgents = async () => {
  try {
    const agents = await axios.get(
      "http://localhost:8888/api/agents/getAllAgents"
    );
    return agents.data;
  } catch {
    return "Somthing went wrong";
  }
};
