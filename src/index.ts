import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import projectRoutes from "./routes/projectRoute";
import skillRoutes from "./routes/skillRoute";
import cors from "cors";

const prisma = new PrismaClient();
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);

const port = process.env.PORT || 8080;

app.get("/", (_req: Request, res: Response) => {
  return res.send("Geek Backend");
});

app.get("/hello", (_req: Request, res: Response) => {
  return res.send("Hello, I'm Harke");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
