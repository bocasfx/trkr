import gql from 'graphql-tag';

const findUserByEmail = gql`
  query findUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      _id
      email
      lists {
        data {
          title
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
          title
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

export {
  findUserByEmail,
  findUserById,
  createUser,
};
