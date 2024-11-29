-- CreateTable
CREATE TABLE "professores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "diciplinaID" INTEGER NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL
);
