let connection = require("./connection-wrapper");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

async function addUser(registrationData) {
  let sql = `SELECT * FROM Users WHERE username=? `;
  let parameters = [registrationData.username];

  const userNameResult = await connection.executeWithParameters(sql, parameters);

  if (userNameResult.length != 0) {
    return 0;
  }

  sql = `INSERT INTO Users ( username, password, email, first_name, last_name, user_type)
VALUES (?,?,?,?,?,?);`;

  let userType = "USER";

  parameters = [
    registrationData.username,
    registrationData.password,
    registrationData.email,
    registrationData.firstName,
    registrationData.lastName,
    userType,
  ];

  try {
    let userData = await connection.executeWithParameters(sql, parameters);
    isUserExistByName(registrationData);
    return userData.userId;
  } catch (e) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(registrationData), e);
  }
}

// async function editUser(updateUserData) {
//   let parameters = [
//     updateUserData.username,
//     updateUserData.password,
//     updateUserData.email,
//     updateUserData.firstName,
//     updateUserData.lastName,
//     updateUserData.username,
//   ];
//   console.log(parameters);
//   console.log(updateUserData);

//   const sql = `UPDATE users SET username = ?, password = ?, email = ?,
//   first_name = ?, last_name = ? WHERE username = ?`;
//   let response = await connection.executeWithParameters(sql, parameters);
//   console.log("----------------------------------------------------");
//   console.log(response);
// }

async function isUserExistByName(registrationData) {
  let sql = `SELECT username FROM Users WHERE username=?`;
  try {
    let parameters = [registrationData];
    await connection.executeWithParameters(sql, parameters);
  } catch (err) {
    throw new ServerError(ErrorType.INVALID_USER_NAME, JSON.stringify(registrationData), err);
  }
}

async function login(username, password) {
  let sql = `SELECT user_id AS userId, first_name AS "firstName", user_type AS "userType" FROM Users WHERE username=? and password =?`;
  let parameters = [username, password];
  let usersLoginResult;
  try {
    usersLoginResult = await connection.executeWithParameters(sql, parameters);
    console.log("all good");
    return usersLoginResult[0];
  } catch (err) {
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(username, password), err);
  }
}

module.exports = {
  addUser,
  login,
  isUserExistByName,
};
