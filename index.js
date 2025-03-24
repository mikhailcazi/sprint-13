const express = require("express");
const PORT = 9009;

const gameLibrary = [
  {
    id: 0,
    name: "Fortnite",
    version: "24.2",
    achievements: 1124,
  },
  {
    id: 1,
    name: "Valorant",
    version: "12.2",
    achievements: 123,
  },
  {
    id: 2,
    name: "No Man's Sky",
    version: "1.2",
    achievements: 1323,
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, welcome to the game server!");
});

app.get("/games", (req, res) => {
  res.send(gameLibrary);
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  const game = gameLibrary.at(id);

  if (!game) {
    res.status(404).send("Game id " + id + " not found!");
  }
  res.send(game);
});

app.listen(PORT, () => {
  console.log("Hey! Server is running on port " + PORT);
});
