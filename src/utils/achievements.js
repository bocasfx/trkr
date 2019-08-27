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

export { categorizeAchievements, findAchievementIndex };
