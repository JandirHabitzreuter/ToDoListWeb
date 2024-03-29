
import { prisma } from "../../../../database/prismaClient";

export class CreateListUseCase{

    async execute(content : string){
        const list = await prisma.todolist.create({
            data:{
                content
            }
        });

        return list;
    }

}