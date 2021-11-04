require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(process.env.PORT, () => {
    console.log(`
        Server on port ${process.env.PORT} 
        http://${process.env.HOST}:${process.env.PORT}
    `);
})