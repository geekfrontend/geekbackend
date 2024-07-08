"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProject = exports.getProjects = void 0;
const projectService = __importStar(require("../services/projectService"));
const getProjects = (req, res) => {
    try {
        const projects = projectService.fetchProjects();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
};
exports.getProjects = getProjects;
const getProject = (req, res) => {
    const { id } = req.params;
    try {
        const project = projectService.fetchProject(Number(id));
        if (project) {
            res.status(200).json(project);
        }
        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch project" });
    }
};
exports.getProject = getProject;
const createProject = (req, res) => {
    const { title, description, tags, imageUrl } = req.body;
    try {
        const newProject = projectService.addProject(title, description, tags, imageUrl);
        res.status(201).json(newProject);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create project" });
    }
};
exports.createProject = createProject;
const updateProject = (req, res) => {
    const { id } = req.params;
    const { title, description, tags, imageUrl } = req.body;
    try {
        const updatedProject = projectService.modifyProject(Number(id), title, description, tags, imageUrl);
        if (updatedProject) {
            res.status(200).json(updatedProject);
        }
        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update project" });
    }
};
exports.updateProject = updateProject;
const deleteProject = (req, res) => {
    const { id } = req.params;
    try {
        const isDeleted = projectService.removeProject(Number(id));
        if (isDeleted) {
            res.status(200).json({ message: "Project deleted successfully" });
        }
        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete project" });
    }
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=projectController.js.map