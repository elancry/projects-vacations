const connection = require("../dao/connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

// get all vacations (ALL USERS)
async function getAllVacations(userId) {
  let sql = `SELECT 
  v.vacation_id AS vacationId,
  v.destination,
  v.description,
  v.image,
  DATE_FORMAT(v.from_date, "%Y-%m-%d") AS fromDate,
  DATE_FORMAT(v.to_date, "%Y-%m-%d") AS toDate,
  v.price,
  CASE
      WHEN followed.vacation_id IS NOT NULL THEN true
      ELSE false
  END AS 'isFollowed',
  CASE
      WHEN fv.followers IS NOT NULL THEN fv.followers
      ELSE 0
  END AS 'amountOfFollowers'
FROM
  vacations v
      LEFT JOIN
  (SELECT 
      vacation_id
  FROM
      followers
  WHERE
      user_id = ?) followed ON v.vacation_id = followed.vacation_id
      LEFT JOIN
  (SELECT 
      vacation_id, COUNT(vacation_id) AS 'followers'
  FROM
      followers
  GROUP BY vacation_id) fv ON v.vacation_id = fv.vacation_id
ORDER BY isFollowed DESC`;

  try {
    let parameters = [userId];

    const vacations = await connection.executeWithParameters(sql, parameters);
    return vacations;
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(vacations), err);
  }
}
async function deleteVacation(vacationId) {
  let sql = `DELETE FROM vacations WHERE vacation_id = ?`;
  console.log(vacationId);
  let parameters = [vacationId];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(vacationId), err);
  }
}

async function addVacation(vacationData) {
  let sql = `INSERT INTO vacations (destination, description, from_date, to_date, price, image)
VALUES (?,?,?,?,?,?)`;

  let parameters = [
    vacationData.destination,
    vacationData.description,
    vacationData.fromDate,
    vacationData.toDate,
    vacationData.price,
    vacationData.image,
  ];

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(vacationData), err);
  }
}

async function updateVacation(vacationId, vacationData) {
  let parameters = [
    vacationData.destination,
    vacationData.description,
    vacationData.fromDate,
    vacationData.toDate,
    vacationData.price,
    vacationData.image,
    vacationId,
  ];

  const sql = `UPDATE vacations SET destination = ?, description = ?, from_date = ?,
  to_date = ?, price = ?, image = ? WHERE vacation_id = ?`;

  try {
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(vacationId, vacationData), err);
  }
  // return info.affectedRows === 0 ? null : vacation;
}

module.exports = {
  getAllVacations,
  addVacation,
  deleteVacation,
  updateVacation,
};
