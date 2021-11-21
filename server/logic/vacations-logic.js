const vacationsDao = require("../dao/vacations-dao");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

async function getAllVacations(userId) {
  let allVacations = await vacationsDao.getAllVacations(userId);
  for (let i = 0; i < allVacations.length; i++) {
    if (allVacations[i].isFollowed == 1) {
      allVacations[i].isFollowed = true;
    } else {
      allVacations[i].isFollowed = false;
    }
  }
  return allVacations;
}
async function addVacation(vacationData) {
  validateVacDetails(vacationData);
  await vacationsDao.addVacation(vacationData);
}

async function deleteVacation(vacationId) {
  await vacationsDao.deleteVacation(vacationId);
}

async function updateVacation(vacationId, vacationData) {
  await vacationsDao.updateVacation(vacationId, vacationData);
}

function validateVacDetails(vacationData) {
  if (!vacationData.image) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!vacationData.destination) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!vacationData.description) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }

  if (!vacationData.price) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
}

module.exports = {
  validateVacDetails,
  addVacation,
  deleteVacation,
  updateVacation,
  getAllVacations,
};
