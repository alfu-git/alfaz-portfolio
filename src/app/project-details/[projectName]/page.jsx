import ProjectDetailsCard from "@/components/projects/ProjectDetailsCard";
import { getAllProjects } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { IoPlayBackSharp } from "react-icons/io5";

export async function generateMetadata({ params }) {
  const { projectName } = await params;

  return {
    title: `${projectName} | Project Details`,
    description: `Explore details, features, and technologies used in ${projectName}.`,
  };
}

const ProjectDetailsPage = async ({ params }) => {
  const { projectName } = await params;

  const allProjects = getAllProjects();

  const expectedProject = allProjects.find(
    (project) => project.name === projectName,
  );

  return (
    <section className="mt-10 mb-20 max-w-7xl w-full mx-auto px-5 overflow-hidden">
      <div>
        <div className="mb-15 sm:mb-25 lg:mb-20 flex flex-col gap-y-4 sm:gap-y-6 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-5xl text-gradient font-bold">
            Project Breakdown
          </h2>

          <Link href={"/#projects"} className="block">
            <Button
              className={
                "h-auto py-1 px-4 md:py-2 md:px-5 glass-1 rounded-full text-zinc-300 gap-3 md:gap-4 sm:text-base"
              }
            >
              <IoPlayBackSharp /> Back To Projects
            </Button>
          </Link>
        </div>

        <div>
          <ProjectDetailsCard expectedProject={expectedProject} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
