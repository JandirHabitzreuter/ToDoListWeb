import { prisma } from "../../../../database/prismaClient";

export class DeleteListUseCase{

    async execute(id : string){
        console.log('CHEGOU AQUI : ');
        await prisma.todolist.delete({
            where:{
                id
            }
        });        
    }
}