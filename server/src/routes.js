import { Router } from "express";
import techStack from "./controllers/tech-stack-controller.js";
import certificate from "./controllers/certificate-controller.js";

const routes = Router();

routes.use('/tech-stack', techStack);
routes.use('/certificates', certificate);

export default routes;