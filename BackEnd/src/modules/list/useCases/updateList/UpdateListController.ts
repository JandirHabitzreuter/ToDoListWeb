import { Request, Response } from "express";
import { UpdateListUseCase } from "./UpdateListUseCase";

export class UpdateListController{

    async handle(request : Request, response : Response){
      const { content, Iscompleted } = request.body;

      const updateListUseCase = new UpdateListUseCase();
      const list = updateListUseCase.execute(content, Iscompleted);
      return response.json(list);
    }
} 