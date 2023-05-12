import useSWR from "swr";
import { Skill } from "../typings";

function fetchSkill() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  const { data: skills, error } = useSWR<Skill[]>(
    `${baseURL}/api/skills`,
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
