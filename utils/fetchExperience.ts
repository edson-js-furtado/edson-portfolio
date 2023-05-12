import useSWR from "swr";
import { Experience } from "../typings";

function fetchExperience() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  const { data: experience, error } = useSWR<Experience[]>(
    `${baseURL}/api/experiences`,
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

