import { Request, Response } from "express";
import * as skillService from "../services/skillService";

export const getSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const skill = await skillService.getSkill(Number(id));

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: "Failed to get skill" });
  }
};

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await skillService.getSkills();

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: "Failed to get skills" });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newSkill = await skillService.createSkill(name);

    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: "Failed to create skill" });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const newSkill = await skillService.updateSkill(Number(id), name);

    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: "Failed to update skill" });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await skillService.deleteSkill(Number(id));

    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete skill" });
  }
};
