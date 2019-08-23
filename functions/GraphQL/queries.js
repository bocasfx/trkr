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

export {
  findUserByEmail,
  findUserById,
  createUser,
  createList,
};
