import { Router } from "express";
import { CreateListController } from "./modules/list/useCases/createList/CreateListController";
import { GetListController } from "./modules/list/useCases/getList/GetListController";
import { DeleteListController } from "./modules/list/useCases/deleteList/DeleteListController";
import { UpdateListController } from "./modules/list/useCases/updateList/UpdateListController";


const routes = Router();

const createListController = new CreateListController();
const getListController = new GetListController();
const deleteListController = new DeleteListController();
const updateListController = new UpdateListController();

routes.post("/list", createListController.handle);
routes.get("/list", getListController.handle);
routes.delete("/list/:id", deleteListController.handle);
routes.put("/list/:id", updateListController.handle);

export { routes };