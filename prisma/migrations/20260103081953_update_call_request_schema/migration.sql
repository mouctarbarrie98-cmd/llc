-- CreateTable
CREATE TABLE "Prescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "datePrescribed" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" INTEGER NOT NULL,
    CONSTRAINT "Prescription_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CallRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "reason" TEXT NOT NULL,
    "preferredTime" TEXT,
    "isEmergency" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" DATETIME,
    "referringDoctor" TEXT,
    "notes" TEXT
);
INSERT INTO "new_CallRequest" ("createdAt", "dateOfBirth", "fullName", "id", "notes", "phone", "preferredTime", "reason", "referringDoctor", "status") SELECT "createdAt", "dateOfBirth", "fullName", "id", "notes", "phone", "preferredTime", "reason", "referringDoctor", "status" FROM "CallRequest";
DROP TABLE "CallRequest";
ALTER TABLE "new_CallRequest" RENAME TO "CallRequest";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
