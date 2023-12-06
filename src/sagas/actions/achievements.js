const createAchievement = data => ({
  type: 'CREATE_ACHIEVEMENT',
  data,
});

const createAchievementSuccess = data => ({
  type: 'CREATE_ACHIEVEMENT_SUCCESS',
  data,
});

const deleteAchievement = data => ({
  type: 'DELETE_ACHIEVEMENT',
  data,
});

const deleteAchievementSuccess = data => ({
  type: 'DELETE_ACHIEVEMENT_SUCCESS',
  data,
});

export {
  createAchievement,
  createAchievementSuccess,
  deleteAchievement,
  deleteAchievementSuccess,
};