const usersLogic = require("../logic/users-logic");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY
  let registrationData = request.body;
  try {
    let userData = await usersLogic.addUser(registrationData);
    response.json(userData);
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY
  let username = request.body.username;
  let password = request.body.password;
  try {
    let userData = await usersLogic.login(username, password);
    response.json(userData);
  } catch (err) {
    return next(err);
  }
});

// router.put("/edit-user/:username", async (request, response, next) => {
//   try {
//     let updateUserData = request.body;
//     console.log(updateUserData, "user data - controller");
//     await usersLogic.editUser(updateUserData);

//     response.json();
//   } catch (err) {
//     return next(err);
//   }
// });

module.exports = router;
