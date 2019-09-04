const addTracker = (trackers, tracker) => {
  const newTrackers = [...trackers];
  newTrackers.push(tracker);
  return newTrackers;
};

export { addTracker };
