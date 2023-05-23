import { Router } from "express";
import { CreateListController } from "./modules/list/useCases/createList/CreateListController";
import { GetListController } from "./modules/list/useCases/getList/GetListController";
import { DeleteListController } from "./modules/list/useCases/deleteList/DeleteListController";


const routes = Router();

const createListController = new CreateListController();
const getListController = new GetListController();
const deleteListController = new DeleteListController();

routes.post("/list", createListController.handle);
routes.get("/list", getListController.handle);
routes.delete("/list/:id", deleteListController.handle);

export { routes };