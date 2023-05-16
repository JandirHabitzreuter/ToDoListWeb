
import { prisma } from "../../../../database/prismaClient";

export class UpdateListUseCase{

    async execute(id : string, content : string, isCompleted : boolean){
        const list = await prisma.todolist.update({
            where:{
                id
            },
            data:{
                content,
                isCompleted
            }
        });

        return list;
    }

}