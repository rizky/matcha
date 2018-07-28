import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'app/components/Layout/Basic';
import { selectCurrentUser } from 'app/pages/Auth/selector';
import type { UserType } from 'app/types/User';
import { onLoadPhotosUser } from 'app/pages/Feed/actions';
import ProfileComponent from 'app/components/Users/Profile';
import { selectPhotosUser } from 'app/pages/Feed/selector';
import type { PhotoType } from 'app/types/Photo';

type Props = {
  currentUser: UserType,
  onLoadPhotosUser: Function,
  photos: Array<PhotoType>,
};

class Profile extends Component<Props> {
  componentWillMount() {
    this.props.onLoadPhotosUser(this.props.currentUser.id);
  }

  render() {
    return (
      <Layout style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <ProfileComponent user={this.props.currentUser} photos={this.props.photos} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  photos: selectPhotosUser(state),
});

const mapDispatchToProps = {
  onLoadPhotosUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile };
