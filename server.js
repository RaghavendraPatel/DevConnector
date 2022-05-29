const express = require('express');
const { listen } = require('express/lib/application');

const app = express();

app.get('/',(req, res)=> res.send('API Running'));

const PORT = process.env.PORT || 3000;

app,listen(PORT, () => console.log(`Server Started on port: ${PORT}`));