const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin@gmail.com" && password === "admin") {
    res.json({ token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
