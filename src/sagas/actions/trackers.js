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

const createTrackerSuccess = data => ({
  type: 'CREATE_TRACKER_SUCCESS',
  data,
});

const deleteTracker = id => ({
  type: 'DELETE_TRACKER',
  id,
});

const deleteTrackerSuccess = data => ({
  type: 'DELETE_TRACKER_SUCCESS',
  data,
});

export {
  findTrackerByID,
  findTrackerByIDSuccess,
  createTracker,
  createTrackerSuccess,
  deleteTracker,
  deleteTrackerSuccess,
};
