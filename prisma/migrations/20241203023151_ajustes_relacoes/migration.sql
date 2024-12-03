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
    CONSTRAINT "avaliacao_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "professores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "avaliacao_diciplinaID_fkey" FOREIGN KEY ("diciplinaID") REFERENCES "diciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_avaliacao" ("conteudo", "createdt", "diciplinaID", "id", "professorID", "updateddt", "usuarioID") SELECT "conteudo", "createdt", "diciplinaID", "id", "professorID", "updateddt", "usuarioID" FROM "avaliacao";
DROP TABLE "avaliacao";
ALTER TABLE "new_avaliacao" RENAME TO "avaliacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
