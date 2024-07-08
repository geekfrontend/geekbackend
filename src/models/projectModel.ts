export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

let projects: Project[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "../public/project.jpg",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "../public/project.jpg",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "../public/project.jpg",
  },
];

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const createProject = (
  title: string,
  description: string,
  tags: string[],
  imageUrl: string
): Project => {
  const newProject: Project = {
    id: projects.length + 1,
    title,
    description,
    tags,
    imageUrl,
  };
  projects.push(newProject);
  return newProject;
};

export const updateProject = (
  id: number,
  title: string,
  description: string,
  tags: string[],
  imageUrl: string
): Project | undefined => {
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex !== -1) {
    projects[projectIndex] = { id, title, description, tags, imageUrl };
    return projects[projectIndex];
  }
  return undefined;
};

export const deleteProject = (id: number): boolean => {
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    return true;
  }
  return false;
};
