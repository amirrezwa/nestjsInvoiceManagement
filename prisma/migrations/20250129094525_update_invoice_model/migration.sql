/*
  Warnings:

  - Added the required column `count` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
