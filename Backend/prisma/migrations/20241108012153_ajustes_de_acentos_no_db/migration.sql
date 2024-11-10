-- CreateEnum
CREATE TYPE "especie" AS ENUM ('cachorro', 'gato', 'aves', 'roedores', 'peixes', 'outros');

-- CreateEnum
CREATE TYPE "personalidade" AS ENUM ('amigo', 'guardiao', 'alegre', 'quieto', 'agitado', 'sociavel', 'agressivo', 'calmo', 'extrovertido', 'introvertido', 'inteligente', 'obediente', 'desobediente');

-- CreateEnum
CREATE TYPE "sexo" AS ENUM ('macho', 'femea');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('disponivel', 'adotado');

-- CreateEnum
CREATE TYPE "tamanho" AS ENUM ('pequeno', 'medio', 'grande');

-- CreateEnum
CREATE TYPE "user_sistema" AS ENUM ('administrador', 'usuario');

-- CreateTable
CREATE TABLE "adocoes" (
    "adocoes_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pet" UUID,
    "id_adotante" UUID,

    CONSTRAINT "adocoes_pkey" PRIMARY KEY ("adocoes_id")
);

-- CreateTable
CREATE TABLE "adotantes" (
    "adotante_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "endereco" VARCHAR(100) NOT NULL,
    "user_adotante" "user_sistema" NOT NULL DEFAULT 'usuario',

    CONSTRAINT "adotantes_pkey" PRIMARY KEY ("adotante_id")
);

-- CreateTable
CREATE TABLE "pet" (
    "pet_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(100) NOT NULL,
    "especie_pet" "especie" NOT NULL,
    "data_nasc" DATE NOT NULL,
    "descricao" VARCHAR(280),
    "status_pet" "status" NOT NULL DEFAULT 'disponivel',
    "tamanho_pet" "tamanho" NOT NULL,
    "sexo_pet" "sexo" NOT NULL,
    "image_pet" VARCHAR(300),

    CONSTRAINT "pet_pkey" PRIMARY KEY ("pet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adotantes_email_key" ON "adotantes"("email");

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "fk_adotante" FOREIGN KEY ("id_adotante") REFERENCES "adotantes"("adotante_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "fk_pet" FOREIGN KEY ("id_pet") REFERENCES "pet"("pet_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
