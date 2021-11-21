const usersDao = require("../dao/users-dao");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("./config.json");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");
const cacheModule = require("../logic/cache-module");

const saltRight = "eaajgk324j32kj5ljkjhsadasj325gjlk";
const saltLeft = "--eaajgk324jkhkuidfsdskjhj325gjlk";

async function addUser(registrationData) {
  await validateUserDetails(registrationData);
  registrationData.password = crypto
    .createHash("md5")
    .update(saltLeft + registrationData.password + saltRight)
    .digest("hex");
  const user = await usersDao.addUser(registrationData);
  if (user === 0) {
    throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
  }
}

// async function editUser(updateUserData) {
//   if (await usersDao.isUserExistByName(updateUserData.username)) {
//     throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
//   }
//   updateUserData.password = crypto
//     .createHash("md5")
//     .update(saltLeft + updateUserData.password + saltRight)
//     .digest("hex");
//   console.log("Hashed password : " + updateUserData.password);
//   console.log(updateUserData.password);
//   await usersDao.addUser(updateUserData);
// }

function validateUserDetails(registrationData) {
  if (!registrationData.username) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.firstName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.lastName) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!registrationData.password) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (registrationData.password.localeCompare(registrationData.confirmPassword) !== 0) {
    throw new ServerError(ErrorType.INVALID_PASSWORD);
  }
  if (registrationData.password.length < 3) {
    throw new ServerError(ErrorType.INVALID_INPUT);
  }
  if (registrationData.firstName.length < 2) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
  if (registrationData.lastName.length < 2) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
  if (registrationData.username.length < 4) {
    throw new ServerError(ErrorType.INVALID_NAME);
  }
}

async function validateLoginUserDetails(username, password) {
  if (!username) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
  if (!password) {
    throw new ServerError(ErrorType.EMPTY_FIELD);
  }
}

async function login(username, password) {
  await validateLoginUserDetails(username, password);
  password = crypto
    .createHash("md5")
    .update(saltLeft + password + saltRight)
    .digest("hex");
  let userDetails = await usersDao.login(username, password);
  if (!userDetails) {
    throw new ServerError(ErrorType.UNAUTHORIZED);
  }

  const token = jwt.sign({ sub: username }, config.secret);
  cacheModule.set(token, { userType: userDetails.userType, userId: userDetails.userId });

  return {
    token,
    userType: userDetails.userType,
    firstName: userDetails.firstName,
    username: username,
  };
}

module.exports = {
  addUser,
  login,
};
