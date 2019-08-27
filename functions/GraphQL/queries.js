import gql from 'graphql-tag';

const findUserByEmail = gql`
  query findUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      _id
      email
      lists {
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
      lists {
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

const createList = gql`
  mutation createList($name: String!) {
    createList(data: { name: $name }) {
      _id
    }
  }
`;

const findListByID = gql`
  query findListByID($id: ID!) {
    findListByID(id: $id) {
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
  mutation($year: Int $month: Int $day: Int $list: ID) {
    createAchievement(data: {
      completed: true
      year: $year
      month: $month
      day: $day
      list: {
        connect: $list
      }
    }) {
      _id
    }
  }
`;

export {
  findUserByEmail,
  findUserById,
  findListByID,
  createUser,
  createList,
  createAchievement,
};
