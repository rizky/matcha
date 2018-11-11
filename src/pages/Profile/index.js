import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'src/components/Layout/Basic';
import { selectCurrentUser } from 'src/pages/Auth/selector';
import ProfileComponent from 'src/components/Users/Profile';

type Props = {
  currentUser: UserType,
};

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component<Props> {
  render() {
    return (
      <Layout style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <ProfileComponent user={this.props.currentUser} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Profile);
