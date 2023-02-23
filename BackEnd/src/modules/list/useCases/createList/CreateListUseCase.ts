
import { prisma } from "../../../../database/prismaClient";

interface ICreateList{
    description :string
}

export class CreateListUseCase{

    async execute({ description } : ICreateList){
        const list = await prisma.todolist.create({
            data:{
                description
            }
        });

        return list;
    }

}