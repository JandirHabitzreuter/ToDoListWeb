
import { Request, Response } from "express";
import { GetListUseCase } from "./GetListUsecase";

export class GetListController{

    async handle(request: Request, response : Response){
        const getListUseCase = new GetListUseCase();
        const lists = await getListUseCase.execute();
        console.log(lists);
        response.json(lists);
    }

}