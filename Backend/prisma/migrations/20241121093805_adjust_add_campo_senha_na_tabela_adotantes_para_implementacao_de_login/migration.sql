/*
  Warnings:

  - Added the required column `senha` to the `adotantes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adotantes" ADD COLUMN     "senha" TEXT NOT NULL;
