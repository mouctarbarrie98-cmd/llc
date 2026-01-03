-- CreateTable
CREATE TABLE "CallRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "referringDoctor" TEXT,
    "preferredTime" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
