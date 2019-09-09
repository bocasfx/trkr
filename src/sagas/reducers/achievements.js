import {
  addAchievement,
  removeAchievement,
  updateAchievement,
} from '../../utils';

const reducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FIND_TRACKER_BY_ID_SUCCESS':
      return data;

    case 'CREATE_ACHIEVEMENT':
      return addAchievement(state, {
        ...data,
        completed: false,
        pending: true,
      });

    case 'CREATE_ACHIEVEMENT_SUCCESS':
      return addAchievement(removeAchievement(state, data), {
        ...data,
        pending: false,
      });

    case 'DELETE_ACHIEVEMENT':
      return updateAchievement(state, {
        ...data,
        completed: true,
        pending: true,
      });

    case 'DELETE_ACHIEVEMENT_SUCCESS':
      return removeAchievement(state, data);

    default:
      return state;
  }
};

export default reducer;
