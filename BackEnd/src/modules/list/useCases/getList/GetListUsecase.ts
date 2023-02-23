import { prisma } from "../../../../database/prismaClient";

export class GetListUseCase{

  async execute(){
    const lists = await prisma.todolist.findMany({
        select:{
            description: true
        }
    });
    
     return lists;
  }

}