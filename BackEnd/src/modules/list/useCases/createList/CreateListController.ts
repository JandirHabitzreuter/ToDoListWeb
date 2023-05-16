import { Request, Response } from "express";
import { CreateListUseCase } from "./CreateListUseCase";

export class CreateListController{

    async handle(request : Request, response : Response){
      const { content } = request.body;

      const createListUseCase = new CreateListUseCase();
      const list = createListUseCase.execute(content);
      return response.json(list);
    }
} 