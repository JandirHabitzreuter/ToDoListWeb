import { prisma } from "../../../../database/prismaClient";

export class GetListUseCase{

  async execute(){
    const lists = await prisma.todolist.findMany({
      orderBy:{
        created_at: 'desc'
      }
    });    
     return lists;
  }

}
