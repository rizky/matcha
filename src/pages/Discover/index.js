// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Layout from 'src/components/Layout/Basic';
import Users from 'src/components/Users';
import { onLoadUsers, type Action } from 'src/pages/Discover/actions';
import { selectUsers } from 'src/pages/Discover/selector';
import { selectCurrentUser } from 'src/pages/Auth/selector';

type Props = {
  users: Array<UserType>,
  currentUser: UserType,
  onLoadUsers: () => Action,
};

class Discover extends Component<Props> {
  componentWillMount() {
    this.props.onLoadUsers();
  }

  render() {
    return (
      <Layout>
        <ScrollView style={{ flex: 1 }}>
          <Users users={this.props.users} currentUser={this.props.currentUser} />
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  users: selectUsers(state),
});

const mapDispatchToProps = {
  onLoadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
