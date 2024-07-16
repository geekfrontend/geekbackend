import { Request, Response } from "express";
import * as skillService from "../services/skillService";
import { ApiResponse } from "../utils/response";

export const getSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const skill = await skillService.getSkill(Number(id));

    res
      .status(200)
      .json(
        new ApiResponse(200, "success", "Skill fetched successfully", skill)
      );
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, "error", "Failed to get skill", {}));
  }
};

export const getSkills = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const { skills, totalSkills } = await skillService.getSkills(page, limit);

    const totalPages = Math.ceil(totalSkills / limit);

    res.status(200).json(
      new ApiResponse(200, "success", "Skills fetched", {
        skills,
        page,
        limit,
        totalSkills,
        totalPages,
      })
    );
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, "error", "Failed to get skills", {}));
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newSkill = await skillService.createSkill(name);

    res
      .status(201)
      .json(new ApiResponse(201, "success", "Skill created", newSkill));
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, "error", "Failed to create skill", {}));
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const newSkill = await skillService.updateSkill(Number(id), name);

    res
      .status(201)
      .json(new ApiResponse(201, "success", "Skill updated", newSkill));
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, "error", "Failed to update skill", {}));
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await skillService.deleteSkill(Number(id));

    res.status(200).json(new ApiResponse(200, "success", "Skill deleted", {}));
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, "error", "Failed to delete skill", {}));
  }
};
