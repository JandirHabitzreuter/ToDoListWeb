import { Router } from "express";
import { CreateListController } from "./modules/list/useCases/createList/CreateListController";

const routes = Router();

const createListController = new CreateListController();

routes.post("/list", createListController.handle);

export { routes };