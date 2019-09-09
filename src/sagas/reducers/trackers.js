import { addTracker } from '../../utils/trackers';

const reducer = (state = [], action) => {
  const { data, type } = action;
  switch (type) {
    case 'FIND_USER_BY_EMAIL_SUCCESS':
      // eslint-disable-next-line no-underscore-dangle
      return data.trackers.data.map(item => ({ name: item.name, id: item._id }));

    case 'CREATE_TRACKER_SUCCESS':
      return addTracker(state, data);

    case 'DELETE_TRACKER_SUCCESS':
      return state.filter(tracker => tracker.id !== data);

    default:
      return state;
  }
};

export default reducer;
