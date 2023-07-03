-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "User_id_user_idx" ON "User"("id_user");
