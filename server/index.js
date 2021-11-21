const express = require("express");
// const loginFilter = require("./middleware/login-filter");
const cors = require("cors");
const errorHandler = require("./errors/error-handler");
const server = express();
const usersController = require("./controllers/users-controller");
const vacationsControllers = require("./controllers/vacations-controller");
const followersControllers = require("./controllers/follows-controller");
server.use(cors({ origin: "http://localhost:3000" }));
server.use(express.json());

// server.use(loginFilter());
server.use("/users", usersController);
server.use("/vacations", vacationsControllers);
server.use("/followers", followersControllers);

server.use(errorHandler);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));
