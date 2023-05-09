import useSWR from "swr";
import { Social } from "../typings";

function fetchSocial() {
  const { data: posts, error } = useSWR<Social[]>(
    "http://localhost:3000/api/socials",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const socials: Social[] = data.socials;
      return socials;
    }
  );
  return {
    data: posts,
    error: error,
  };
}

export default fetchSocial;
