const express = require('express');
const app = express();
const port = 3001; // Escolha a porta que desejar

app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
