import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'src/components/Layout/Basic';
import { selectCurrentUser } from 'src/pages/Auth/selector';
import type { UserType } from 'src/types/User';
import { onLoadPhotosUser } from 'src/pages/Feed/actions';
import ProfileComponent from 'src/components/Users/Profile';
import { selectPhotosUser } from 'src/pages/Feed/selector';
import type { PhotoType } from 'src/types/Photo';

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
