import { findIndex } from 'lodash';

const categorizeAchievements = (achievements) => {
  const categorizedAchievements = {};
  achievements.forEach((achievement) => {
    const { year, month } = achievement;
    if (!categorizedAchievements[year]) {
      categorizedAchievements[year] = {};
    }

    if (!categorizedAchievements[year][month]) {
      categorizedAchievements[year][month] = [];
    }
    categorizedAchievements[year][month].push({ ...achievement });
  });
  return categorizedAchievements;
};

const findAchievementIndex = (achievements, day) => findIndex(achievements, { day });

const addAchievement = (achievements, achievement) => {
  const newAchievements = { ...achievements };
  const { year, month } = achievement;
  const yearExists = newAchievements[year];
  if (!yearExists) {
    newAchievements[year] = {};
  }
  const monthExists = newAchievements[year][month];

  if (!monthExists) {
    newAchievements[year][month] = [];
  }

  newAchievements[year][month].push(achievement);
  return newAchievements;
}

export { categorizeAchievements, findAchievementIndex, addAchievement };
