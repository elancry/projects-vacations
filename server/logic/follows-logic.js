const followDao = require("../dao/follows-dao");

async function follow(userId, vacationId) {
  await followDao.follow(userId, vacationId);
}
async function unFollow(userId, vacationId) {
  await followDao.unFollow(userId, vacationId);
}

module.exports = {
  follow,
  unFollow,
};
