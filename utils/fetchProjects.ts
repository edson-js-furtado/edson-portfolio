import useSWR from "swr";
import { Project } from "../typings";

function fetchProject() {
  const { data: projects, error } = useSWR<Project[]>(
    "http://localhost:3000/api/projects",
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
