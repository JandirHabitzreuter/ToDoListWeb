import { Router } from "express";
import { CreateListController } from "./modules/list/useCases/createList/CreateListController";
import { GetListController } from "./modules/list/useCases/getList/GetListController";

const routes = Router();

const createListController = new CreateListController();
const getListController = new GetListController();

routes.post("/list", createListController.handle);
routes.get("/list", getListController.handle);

export { routes };