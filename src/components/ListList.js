/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import gql from 'graphql-tag';
import gqlClient from '../GraphQL/GQLClient';

const query = gql`
query GetAllLists {
  allLists {
    data {
      id: _id
      title
    }
  } 
}
`;

class ListList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentWillMount() {
    gqlClient.query({ query }).then((result) => {
      this.setState({
        lists: result.data.allLists.data,
      });
    });
  }

  renderLists() {
    const { lists } = this.state;
    return lists.map(list => <div key={list.id}>{list.title}</div>);
  }

  render() {
    return <>{this.renderLists()}</>;
  }
}

export default ListList;
