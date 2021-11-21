const vacationLogic = require("../logic/vacations-logic");
const express = require("express");
const router = express.Router();
const cacheModule = require("../logic/cache-module");
// const jwt = require("jsonwebtoken");
// const jwtLogic = require("../logic/jwt-logic");

router.get("/", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY

  try {
    let userData = await cacheModule.extractUserDataFromCache(request);
    let userId = userData.userId;

    let vacations = await vacationLogic.getAllVacations(userId);
    response.json(vacations);
  } catch (err) {
    return next(err);
  }
});
router.post("/", async (request, response, next) => {
  let vacationData = request.body;
  try {
    await vacationLogic.addVacation(vacationData);
    response.json();
  } catch (err) {
    return next(err);
  }
});
router.delete("/:id", async (request, response, next) => {
  let vacationId = request.params.id;
  try {
    await vacationLogic.deleteVacation(vacationId);
    response.json();
  } catch (err) {
    return next(err);
  }
});

router.put("/edit-vacation/:id", async (request, response, next) => {
  try {
    let vacationId = request.params.id;
    let vacationData = request.body;
    console.log(vacationId, "vacation id");
    console.log(vacationData, "vacation data");
    await vacationLogic.updateVacation(vacationId, vacationData);
    response.json();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
