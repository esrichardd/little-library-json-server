const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(authRoutes);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
