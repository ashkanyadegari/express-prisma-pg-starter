/*
  Warnings:

  - A unique constraint covering the columns `[phonenumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phonenumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User.phonenumber_unique" ON "User"("phonenumber");