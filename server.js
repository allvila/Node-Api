import express from 'express';
import { PrismaClient } from './prisma/generated/prisma/index.js'; // Caminho correto

const prisma = new PrismaClient();
const app = express();

app.use(express.json());


app.post('/usuarios', async (req, res) => {
     
    await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email, 
          age: req.body.age
          
        }
})

    res.status(201).json(req.body);
})

app.put('/usuarios/:id', async (req, res) => {
     
 
 await prisma.user.update({
   where:{
      id: req.params.id
    },
      data: {
       name: req.body.name,
       email: req.body.email, 
        age: req.body.age
        
     }
})

  res.status(202).json(req.body);
})


app.get('/usuarios', async (req, res) => {

    let users = []

    if (req.query) {
      users = await prisma.user.findMany({
        where: {
          name: req.query.name
        }
  })

 } else {
    users = await prisma.user.findMany()
  }
  res.status(200).json(users)
});

app.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json({ "message": "Você está sendo deletado" })
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
