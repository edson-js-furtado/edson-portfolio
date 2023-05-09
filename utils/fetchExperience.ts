import useSWR from "swr";
import { Experience } from "../typings";

function fetchExperience() {
  const { data: experience, error } = useSWR<Experience[]>(
    "http://localhost:3000/api/experiences",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const experience: Experience[] = data.experiences;
      return experience;
    }
  );
  return {
    data: experience,
    error: error,
  };
}

export default fetchExperience;

