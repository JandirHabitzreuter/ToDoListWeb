
import { prisma } from "../../../../database/prismaClient";

export class UpdateListUseCase{

    async execute(id : string){
          let isCompleted = false;

          const toDoList = await prisma.todolist.findUnique({
            where:{
                id
            }
          });

          if (toDoList){
              isCompleted = !toDoList.isCompleted;
          }

        const list = await prisma.todolist.update({
            where:{
                id
            },
            data:{               
                isCompleted
            }
        });

        return list;
    }

}