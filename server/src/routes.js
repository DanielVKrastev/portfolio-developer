import { Router } from "express";
import techStackController from "./controllers/tech-stack-controller.js";
import certificateController from "./controllers/certificate-controller.js";
import aboutController from "./controllers/about-controller.js";
import contactController from "./controllers/contact-controller.js";

const routes = Router();

routes.use('/tech-stack', techStackController);
routes.use('/certificates', certificateController);
routes.use('/about', aboutController);
routes.use('/contact-messages', contactController);

export default routes;