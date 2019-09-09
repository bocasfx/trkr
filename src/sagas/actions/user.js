const findUserByEmail = () => ({
  type: 'FIND_USER_BY_EMAIL_BEGIN',
});

const findUserByEmailSuccess = data => ({
  type: 'FIND_USER_BY_EMAIL_SUCCESS',
  data,
});

export {
  findUserByEmail,
  findUserByEmailSuccess,
};
