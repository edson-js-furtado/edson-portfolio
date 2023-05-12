import useSWR from "swr";
import { PageInfo } from "../typings";

function fetchPageInfo() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  const { data: pageInfo, error } = useSWR<PageInfo>(
    `${baseURL}/api/pageInfo`,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const pageInfo = data.pageInfo;
      return pageInfo;
    }
  );
  return {
    data: pageInfo,
    error: error,
  };
}

export default fetchPageInfo;
