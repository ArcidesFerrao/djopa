/*
  Warnings:

  - You are about to drop the column `employerId` on the `JobPost` table. All the data in the column will be lost.
  - The `salary` column on the `JobPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `companyId` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `competencies` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_employerId_fkey";

-- AlterTable
ALTER TABLE "JobPost" DROP COLUMN "employerId",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "competencies" TEXT NOT NULL,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
DROP COLUMN "salary",
ADD COLUMN     "salary" INTEGER;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "website" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company"("userId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
