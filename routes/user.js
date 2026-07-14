const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Saare users lene ke liye
router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Naya user add karne ke liye
router.post('/add', async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({ data: { name, email } });
    res.json(user);
});

module.exports = router;