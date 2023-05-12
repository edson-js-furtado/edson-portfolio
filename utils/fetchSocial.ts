import useSWR from "swr";
import { Social } from "../typings";

function fetchSocial() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  
  const { data: posts, error } = useSWR<Social[]>(
    `${baseURL}/api/socials`,
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
