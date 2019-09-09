const findTrackerByID = (id, withLoader = true) => ({
  type: 'FIND_TRACKER_BY_ID',
  id,
  withLoader,
});

const findTrackerByIDSuccess = data => ({
  type: 'FIND_TRACKER_BY_ID_SUCCESS',
  data,
});

const createTracker = (name, id) => ({
  type: 'CREATE_TRACKER',
  name,
  id,
});
const deleteTracker = id => ({
  type: 'DELETE_TRACKER',
  id,
});

export {
  findTrackerByID,
  findTrackerByIDSuccess,
  createTracker,
  deleteTracker,
};
