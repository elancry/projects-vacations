const express = require("express");
const followsLogic = require("../logic/follows-logic");
const cacheModule = require("../logic/cache-module");
const router = express.Router();

// add new follow - /api/follow/
router.post("/", async (request, response , next) => {
  try {
    let vacationId = request.body.vacationId;
    let userDetails = await cacheModule.extractUserDataFromCache(request);
    console.log(userDetails.userId);
    let userId = userDetails.userId;

    await followsLogic.follow(userId, vacationId);
    response.json();
  } catch (err) {
    return next(err);
  }
});

// DELETE - remove a follow from a vacation - /api/vacations/follows/:userId/:vacationId
router.delete("/:vacationId", async (request, response, next) => {
  try {
    let userDetails = await cacheModule.extractUserDataFromCache(request);

    let userId = userDetails.userId;
    let vacationId = request.params.vacationId;

    await followsLogic.unFollow(userId, vacationId);
    response.json();
  } catch (err) {
    return next(err);
  }
});

// get number of follows for each vacation - /api/vacations/follows/count-follows/2
// router.get("/count-follows/:vacationId", async (request, response) => {
//   try {
//     const vacationId = +request.params.vacationId;
//     const numberOfFollows = await followsLogic.getNumberOfFollows(vacationId);
//     response.json(numberOfFollows);
//   } catch (err) {
//     response.status(500).send(errorsHelper.getError(err));
//   }
// });

module.exports = router;
