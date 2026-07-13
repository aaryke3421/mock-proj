const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Database Connection Test
async function startServer() {
    try {
        await prisma.$connect();
        console.log('✅ Database Connected Successfully!');
        
        app.listen(3001, () => {
            console.log('🚀 Server is running on port 3001');
        });
    } catch (error) {
        console.error('❌ Database Connection Failed:', error.message);
    }
}

startServer();