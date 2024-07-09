"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const projectRoute_1 = __importDefault(require("./routes/projectRoute"));
const skillRoute_1 = __importDefault(require("./routes/skillRoute"));
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/projects", projectRoute_1.default);
app.use("/skills", skillRoute_1.default);
const port = process.env.PORT || 8080;
app.get("/", (_req, res) => {
    return res.send("Geek Backend");
});
app.get("/hello", (_req, res) => {
    return res.send("Hello, I'm Harke");
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map