import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
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
        <ScrollView style={{ flex: 1 }}>
          <Users users={this.props.users} />
        </ScrollView>
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
