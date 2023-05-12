import useSWR from "swr";
import { Project } from "../typings";

function fetchProject() {

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  const { data: projects, error } = useSWR<Project[]>( 
    `${baseURL}/api/projects`,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const projects = data.project;
      return projects;
    }
  );
  return {
    data: projects,
    error: error,
  };
}

export default fetchProject;
