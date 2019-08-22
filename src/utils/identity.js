import netlifyIdentity from 'netlify-identity-widget';

const generateHeaders = () => {
  const headers = { 'Content-Type': 'application/json' };
  if (netlifyIdentity.currentUser()) {
    return netlifyIdentity
      .currentUser()
      .jwt()
      .then(token => ({ ...headers, Authorization: `Bearer ${token}` }));
  }
  return Promise.resolve(headers);
};

export { generateHeaders };
