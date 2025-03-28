const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 1234;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.end("<h1>Inicio en express</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhos:${PORT}`);
});
