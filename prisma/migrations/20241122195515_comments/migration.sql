-- CreateTable
CREATE TABLE "comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "avalID" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL
);
