let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

// follow a new vacation
async function follow(userId, vacationId) {
  const sql = `INSERT INTO followers(user_id ,vacation_id) VALUES(?, ?)`;
  let parameters = [userId, vacationId];
  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(userId, vacationId), err);
  }
}

// remove a follow from a vacation
async function unFollow(userId, vacationId) {
  const sql = `DELETE FROM followers WHERE user_id= ? AND vacation_id=?`;

  let parameters = [userId, vacationId];
  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(userId, vacationId), err);
  }
}

module.exports = {
  follow,
  unFollow,
  // getNumberOfFollowsAsync,
};
