const express = require('express')
const { PrismaClient } = require('@prisma/client') //not putting "type": "module" in package.json
const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    const [user] = await prisma.users.findMany({where: {user_id: 22}, select: {first_name: true}})
    res.send(user.first_name);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//    const user = await prisma.link.findMany({take: 100})
//  console.log('user', user)
