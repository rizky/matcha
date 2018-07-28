import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import { selectCurrentUser } from 'app/pages/Auth/selector';
import type { UserType } from 'app/types/User';
import { COLORS, MARGINS } from 'app/constants/design';
import { User } from 'app/components/Users';
import type { PhotoType } from 'app/types/Photo';
import { onLoadPhotosUser } from 'app/pages/Feed/actions';
import { selectPhotosUser } from 'app/pages/Feed/selector';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
  },
  photoImageThumbnail: {
    backgroundColor: COLORS.GREY_DARK,
    height: 100,
    margin: MARGINS.TINY,
    width: 100,
  },
  photosContainer: {
    borderColor: COLORS.GREY,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 347,
  },
});

type PhotoThumbnailProps = {
  photo: PhotoType,
};

const PhotoThumbnail = (props: PhotoThumbnailProps) => (
  <Image style={styles.photoImageThumbnail} source={{ uri: props.photo.url }} />
);

type Props = {
  currentUser: UserType,
  photos: Array<PhotoType>,
};

class Profile extends Component<Props> {
  componentWillMount() {
    this.props.onLoadPhotosUser(this.props.currentUser.id);
  }

  render() {
    return (
      <Layout style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
          <User user={this.props.currentUser} />
          <View style={styles.photosContainer}>
            {
              this.props.photos.map((photo) => (<PhotoThumbnail key={photo.id} photo={photo} />))
            }
          </View>
        </ScrollView>
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
