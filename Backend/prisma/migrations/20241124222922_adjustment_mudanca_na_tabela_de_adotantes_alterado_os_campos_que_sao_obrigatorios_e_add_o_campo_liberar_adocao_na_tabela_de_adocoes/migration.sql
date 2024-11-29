-- AlterTable
ALTER TABLE "adocoes" ADD COLUMN     "liberar_adocao" BOOLEAN;

-- AlterTable
ALTER TABLE "adotantes" ALTER COLUMN "telefone" DROP NOT NULL,
ALTER COLUMN "cep" DROP NOT NULL,
ALTER COLUMN "endereco" DROP NOT NULL;
