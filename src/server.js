const express = require('express')

const { PrismaClient } = require('@prisma/client') //not putting "type": "module" in package.json
const app = express()
const port = 3000
const prisma = new PrismaClient()
const path = require('path')
app.use(express.static(path.join(__dirname, 'src')))
app.get('/', async (req, res) => {
   /* const [expense] = await prisma.expenses.findMany({where: {user_id: 4}});
    console.log(expense)
    res.send(expense.expense_date);*/
    console.log('hello')
    //res.sendFile('../public/app.html', {root: __dirname})
    res.sendFile(path.resolve('src/index.html'))
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

//    const user = await prisma.link.findMany({take: 100})
//  console.log('user', user)
