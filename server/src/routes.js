import { Router } from "express";
import techStack from "./controllers/tech-stack-controller.js";

const routes = Router();

routes.use('/tech-stack', techStack);

export default routes;