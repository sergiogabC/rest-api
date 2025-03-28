const express = require("express");
const app = express();
const redSocial = require("./Json/redSocial.json");
const PORT = process.env.PORT ?? 1234;

app.get("/home", (req, res) => {
  res.json(redSocial);
});

app.get("/home/:name", (req, res) => {
  const { name } = req.params;
  const persona = identificadorNombre(name);
  res.json(persona);
});

app.get("/home/:name/friends", (req, res) => {
  const { name } = req.params;
  const persona = identificadorNombre(name);
  const amigos = persona.friends;
  res.json(amigos);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});

function identificadorNombre(name) {
  let persona = redSocial.find(
    (persona) => persona.name.toLowerCase() === name.toLowerCase()
  );
  console.log(typeof persona);
  return persona;
}
