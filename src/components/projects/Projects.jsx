import ProjectSecContent from "./ProjectSecContent";

const projects = [
  {
    name: "DriveOn",
    image: "/assets/projects-ss/driveon.png",
    skills: [
      { skillName: "Next.Js", skillImage: "/assets/skills/nextJs.png" },
      { skillName: "Tailwind CSS", skillImage: "/assets/skills/tailwind.png" },
      { skillName: "MongoDB", skillImage: "/assets/skills/mongodb.png" },
    ],
    description:
      "DriveOn is a modern full-stack car rental platform designed to make vehicle renting simple, fast, and seamless. Users can explore available cars, view detailed information, and rent vehicles with ease. The platform also allows users to manage their bookings and perform full CRUD operations on car listings.The system is built with secure authentication, JWT-based route protection, and a robust booking management system. It features a fully responsive and modern UI for an optimized user experience across all devices.",
  },
  {
    name: "SunCart",
    image: "/assets/projects-ss/suncart.png",
    skills: [
      { skillName: "Next.Js", skillImage: "/assets/skills/nextJs.png" },
      { skillName: "Tailwind CSS", skillImage: "/assets/skills/tailwind.png" },
      { skillName: "Node.Js", skillImage: "/assets/skills/nodeJs.png" },
      { skillName: "Express.Js", skillImage: "/assets/skills/expressJs.png" },
      { skillName: "MongoDB", skillImage: "/assets/skills/mongodb.png" },
    ],
    description:
      "SunCart is modern and clean summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more.Users can browse products and view products details after authentication.",
  },
];

const Projects = async () => {
  return <ProjectSecContent projects={projects} />;
};

export default Projects;
