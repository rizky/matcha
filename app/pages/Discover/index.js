import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Users from 'app/components/Users';
import { onLoadUsers } from 'app/pages/Discover/actions';
import { selectUsers } from 'app/pages/Discover/selector';
import type { UserType } from 'app/types/User';
import { selectCurrentUser } from 'app/pages/Auth/selector';

type Props = {
  users: Array<UserType>,
  currentUser: UserType,
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
