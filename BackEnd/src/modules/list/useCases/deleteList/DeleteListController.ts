import { Request, Response } from "express";
import { DeleteListUseCase } from "./DeleteListUseCase";

export class DeleteListController{

    async handle(request : Request, response : Response){
      const { id } = request.params;

      const deleteListUseCase = new DeleteListUseCase();
      const list = deleteListUseCase.execute(id);
      return response.json(list);
    }
} 