import useSWR from "swr";
import { PageInfo } from "../typings";

function fetchPageInfo() {
  const { data: pageInfo, error } = useSWR<PageInfo>(
    "http://localhost:3000/api/pageInfo",
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
