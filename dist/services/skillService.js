"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSkill = exports.deleteSkill = exports.createSkill = exports.getSkill = exports.getSkills = void 0;
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const getSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.skill.findMany();
});
exports.getSkills = getSkills;
const getSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.skill.findFirst({ where: { id } });
});
exports.getSkill = getSkill;
const createSkill = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.skill.create({ data: { name } });
});
exports.createSkill = createSkill;
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.skill.delete({ where: { id } });
});
exports.deleteSkill = deleteSkill;
const updateSkill = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.skill.update({ where: { id }, data: { name } });
});
exports.updateSkill = updateSkill;
//# sourceMappingURL=skillService.js.map