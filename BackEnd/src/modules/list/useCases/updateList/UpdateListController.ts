import { Request, Response } from "express";
import { UpdateListUseCase } from "./UpdateListUseCase";

export class UpdateListController{

    async handle(request : Request, response : Response){     
      const { id } = request.params;

      const updateListUseCase = new UpdateListUseCase();
      const list = await updateListUseCase.execute(id);
      return response.json(list);
    }
} 