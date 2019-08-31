import gql from 'graphql-tag';

const findUserByEmail = gql`
  query findUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      _id
      email
      trackers {
        data {
          name
          _id
        }
      }
    }
  }
`;

const findUserById = gql`
  query findUserById($id: ID!) {
    findUserById(id: $id) {
      name
      _id
      trackers {
        data {
          name
          _id
        }
      }
    }
  }
`;

const createUser = gql`
  mutation createUser($email: String!) {
    createUser(data: { email: $email }) {
      _id
    }
  }
`;

const createTracker = gql`
  mutation createTracker($name: String!) {
    createTracker(data: { name: $name }) {
      _id
    }
  }
`;

const findTrackerByID = gql`
  query findTrackerByID($id: ID!) {
    findTrackerByID(id: $id) {
      achievements {
        data {
          _id
          year
          month
          day
          completed
        }
      }
    }
  }
`;

const createAchievement = gql`
  mutation($year: Int $month: Int $day: Int $tracker: ID) {
    createAchievement(data: {
      completed: true
      year: $year
      month: $month
      day: $day
      tracker: {
        connect: $tracker
      }
    }) {
      _id
      completed
      year
      month
      day
    }
  }
`;

const deleteAchievement = gql`
  mutation($id: ID!) {
    deleteAchievement(id: $id) {
      _id
    }
  }
`;

export {
  findUserByEmail,
  findUserById,
  findTrackerByID,
  createUser,
  createTracker,
  createAchievement,
  deleteAchievement,
};
