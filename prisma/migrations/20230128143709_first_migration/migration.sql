-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "buyerName" TEXT NOT NULL,
    "seatId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seats" (
    "id" SERIAL NOT NULL,
    "isAvaliable" BOOLEAN NOT NULL DEFAULT true,
    "owner" TEXT DEFAULT 'NULL',

    CONSTRAINT "seats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_buyerName_fkey" FOREIGN KEY ("buyerName") REFERENCES "users"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "seats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
