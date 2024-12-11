-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioID" INTEGER NOT NULL,
    "diciplinaID" INTEGER NOT NULL,
    "professorID" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL,
    CONSTRAINT "avaliacao_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "avaliacao_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "professores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_avaliacao" ("conteudo", "createdt", "diciplinaID", "id", "professorID", "updateddt", "usuarioID") SELECT "conteudo", "createdt", "diciplinaID", "id", "professorID", "updateddt", "usuarioID" FROM "avaliacao";
DROP TABLE "avaliacao";
ALTER TABLE "new_avaliacao" RENAME TO "avaliacao";
CREATE TABLE "new_comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "avalID" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL,
    CONSTRAINT "comentarios_userID_fkey" FOREIGN KEY ("userID") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comentarios_avalID_fkey" FOREIGN KEY ("avalID") REFERENCES "avaliacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comentarios" ("avalID", "conteudo", "createdt", "id", "updateddt", "userID") SELECT "avalID", "conteudo", "createdt", "id", "updateddt", "userID" FROM "comentarios";
DROP TABLE "comentarios";
ALTER TABLE "new_comentarios" RENAME TO "comentarios";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
