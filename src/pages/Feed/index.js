import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Photos from 'app/components/Photos';
import { onLoadPhotos } from 'app/pages/Feed/actions';
import { selectPhotos } from 'app/pages/Feed/selector';
import type { Photo } from 'app/types/Photo';

type Props = {
  photos: Array<Photo>,
  onLoadPhotos: Function,
};

class Feed extends Component<Props> {
  componentWillMount() {
    this.props.onLoadPhotos();
  }

  render() {
    return (
      <Layout>
        <ScrollView style={{ flex: 1 }}>
          <Photos photos={this.props.photos} />
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: selectPhotos(state),
});

const mapDispatchToProps = {
  onLoadPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
export { Feed };
