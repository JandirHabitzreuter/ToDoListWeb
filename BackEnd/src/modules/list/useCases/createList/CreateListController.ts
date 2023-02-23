import { Request, Response } from "express";
import { CreateListUseCase } from "./CreateListUseCase";

export class CreateListController{

    async handle(request : Request, response : Response){
      const { description } = request.body;

      const createListUseCase = new CreateListUseCase();
      const list = createListUseCase.execute({description});
      return response.json(list);
    }
} 