/*
  Warnings:

  - You are about to alter the column `senha` on the `adotantes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "adotantes" ALTER COLUMN "senha" SET DATA TYPE VARCHAR(20);
