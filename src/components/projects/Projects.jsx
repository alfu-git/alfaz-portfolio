import { getAllProjects } from "@/lib/data";
import ProjectSecContent from "./ProjectSecContent";

const Projects = () => {
  const projects = getAllProjects();
  return <ProjectSecContent projects={projects} />;
};

export default Projects;
