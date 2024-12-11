-- CreateTable
CREATE TABLE "diciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "professoresID" TEXT NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_professores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "diciplinaID" INTEGER NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL,
    CONSTRAINT "professores_diciplinaID_fkey" FOREIGN KEY ("diciplinaID") REFERENCES "diciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_professores" ("createdt", "departamento", "diciplinaID", "id", "nome", "updateddt") SELECT "createdt", "departamento", "diciplinaID", "id", "nome", "updateddt" FROM "professores";
DROP TABLE "professores";
ALTER TABLE "new_professores" RENAME TO "professores";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
