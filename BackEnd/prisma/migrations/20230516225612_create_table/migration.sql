-- CreateTable
CREATE TABLE "Todolist" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todolist_pkey" PRIMARY KEY ("id")
);
