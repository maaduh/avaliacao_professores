-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_diciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "professoresID" TEXT,
    "createdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddt" DATETIME NOT NULL
);
INSERT INTO "new_diciplina" ("createdt", "id", "nome", "professoresID", "updateddt") SELECT "createdt", "id", "nome", "professoresID", "updateddt" FROM "diciplina";
DROP TABLE "diciplina";
ALTER TABLE "new_diciplina" RENAME TO "diciplina";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
