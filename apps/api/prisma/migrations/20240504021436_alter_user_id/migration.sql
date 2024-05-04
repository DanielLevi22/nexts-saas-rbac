/*
  Warnings:

  - You are about to drop the column `user_id` on the `Invites` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invites" DROP CONSTRAINT "Invites_user_id_fkey";

-- AlterTable
ALTER TABLE "Invites" DROP COLUMN "user_id",
ADD COLUMN     "author_id" TEXT;

-- AddForeignKey
ALTER TABLE "Invites" ADD CONSTRAINT "Invites_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
