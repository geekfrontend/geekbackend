import { Router } from "express";
import * as skillController from "../controllers/skillController";

const router = Router();

router.get("/", skillController.getSkills);
router.get("/:id", skillController.getSkill);
router.post("/", skillController.createSkill);
router.patch("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

export default router;
