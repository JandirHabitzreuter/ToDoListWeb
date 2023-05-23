import { prisma } from "../../../../database/prismaClient";

export class DeleteListUseCase{

    async execute(id : string){        
        await prisma.todolist.delete({
            where:{
                id
            }
        });        
    }
}