
import { prisma } from "../../../../database/prismaClient";

export class UpdateListUseCase{

    async execute(content : string, Iscompleted : boolean){
        const list = await prisma.todolist.create({
            data:{
                content
            }
        });

        return list;
    }

}