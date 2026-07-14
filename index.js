const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await prisma.user.create({ data: { name, email, password } });
        res.json({ message: "Success" });
    } catch (e) { res.status(400).json({ error: "Failed" }); }
});
app.listen(3001, () => console.log('🚀 Server running on port 3001'));