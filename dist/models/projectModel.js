"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectById = exports.getAllProjects = void 0;
let projects = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: "../public/project.jpg",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: "../public/project.jpg",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: "../public/project.jpg",
    },
];
const getAllProjects = () => {
    return projects;
};
exports.getAllProjects = getAllProjects;
const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
};
exports.getProjectById = getProjectById;
const createProject = (title, description, tags, imageUrl) => {
    const newProject = {
        id: projects.length + 1,
        title,
        description,
        tags,
        imageUrl,
    };
    projects.push(newProject);
    return newProject;
};
exports.createProject = createProject;
const updateProject = (id, title, description, tags, imageUrl) => {
    const projectIndex = projects.findIndex((project) => project.id === id);
    if (projectIndex !== -1) {
        projects[projectIndex] = { id, title, description, tags, imageUrl };
        return projects[projectIndex];
    }
    return undefined;
};
exports.updateProject = updateProject;
const deleteProject = (id) => {
    const projectIndex = projects.findIndex((project) => project.id === id);
    if (projectIndex !== -1) {
        projects.splice(projectIndex, 1);
        return true;
    }
    return false;
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=projectModel.js.map