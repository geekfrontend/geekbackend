import { prisma } from "../utils/prismaClient";
import { Skill } from "@prisma/client";

export const getSkills = async (): Promise<Skill[]> => {
  return await prisma.skill.findMany();
};

export const getSkill = async (id: number): Promise<Skill> => {
  return await prisma.skill.findFirst({ where: { id } });
};

export const createSkill = async (name: string): Promise<Skill> => {
  return await prisma.skill.create({ data: { name } });
};

export const deleteSkill = async (id: number): Promise<void> => {
  await prisma.skill.delete({ where: { id } });
};

export const updateSkill = async (id: number, name: string): Promise<Skill> => {
  return await prisma.skill.update({ where: { id }, data: { name } });
};
