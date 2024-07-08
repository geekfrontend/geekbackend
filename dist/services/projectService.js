"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProject = exports.modifyProject = exports.addProject = exports.fetchProject = exports.fetchProjects = void 0;
const projectModel_1 = require("../models/projectModel");
const fetchProjects = () => {
    return (0, projectModel_1.getAllProjects)();
};
exports.fetchProjects = fetchProjects;
const fetchProject = (id) => {
    return (0, projectModel_1.getProjectById)(id);
};
exports.fetchProject = fetchProject;
const addProject = (title, description, tags, imageUrl) => {
    return (0, projectModel_1.createProject)(title, description, tags, imageUrl);
};
exports.addProject = addProject;
const modifyProject = (id, title, description, tags, imageUrl) => {
    return (0, projectModel_1.updateProject)(id, title, description, tags, imageUrl);
};
exports.modifyProject = modifyProject;
const removeProject = (id) => {
    return (0, projectModel_1.deleteProject)(id);
};
exports.removeProject = removeProject;
//# sourceMappingURL=projectService.js.map