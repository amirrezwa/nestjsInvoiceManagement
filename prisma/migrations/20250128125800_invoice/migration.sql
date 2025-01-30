/*
  Warnings:

  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `count` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `disCount` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_pkey",
DROP COLUMN "count",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "disCount" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "invoice_id" DROP DEFAULT,
ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Invoice_invoice_id_seq";
