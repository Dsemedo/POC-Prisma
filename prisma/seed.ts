import prisma from "../src/config/database.js";

async function main(){
    await prisma.users.createMany({
data: [
    {"name": "Lucas" },
    {"name": "Juan"},
    {"name": "Jeff"}
]
    })
}

main()
.then(() => console.log("Registro feito com sucesso"))
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
await prisma.$disconnect();
})