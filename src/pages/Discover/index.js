import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Users from 'app/components/Users';
import { onLoadUsers } from 'app/pages/Discover/actions';
import { selectUsers } from 'app/pages/Discover/selector';
import type { User } from 'app/types/User';

type Props = {
  users: Array<User>,
};

class Discover extends Component<Props> {
  componentWillMount() {
    this.props.onLoadUsers();
  }

  render() {
    return (
      <Layout>
        <Users users={this.props.users} />
        <View style={{ flex: 1 }} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = {
  onLoadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
export { Discover };
