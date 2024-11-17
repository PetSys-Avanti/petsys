/*
  Warnings:

  - Made the column `personalidade_pet` on table `pet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pet" ALTER COLUMN "personalidade_pet" SET NOT NULL;
