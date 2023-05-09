import useSWR from "swr";
import { Skill } from "../typings";

function fetchSkill() {
  const { data: skills, error } = useSWR<Skill[]>(
    "http://localhost:3000/api/skills",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const skills: Skill[] = data.skills;
      return skills;
    }
  );
  return {
    data: skills,
    error: error,
  };
}

export default fetchSkill;
