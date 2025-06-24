import { Router } from "express";
import techStackController from "./controllers/tech-stack-controller.js";
import certificateController from "./controllers/certificate-controller.js";
import aboutController from "./controllers/about-controller.js";
import contactController from "./controllers/contact-controller.js";
import projectController from "./controllers/project-controller.js";
import authController from "./controllers/auth-controller.js";

const routes = Router();

routes.use('/admin', authController);
routes.use('/tech-stack', techStackController);
routes.use('/certificates', certificateController);
routes.use('/about', aboutController);
routes.use('/contact-messages', contactController);
routes.use('/projects', projectController);

export default routes;