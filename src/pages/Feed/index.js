// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Layout from 'src/components/Layout/Basic';
import Photos from 'src/components/Photos';
import { onLoadPhotos, type Action } from 'src/pages/Feed/actions';
import { selectPhotos } from 'src/pages/Feed/selector';
import type { Photo } from 'src/types/Photo';

type Props = {
  photos: Array<Photo>,
  onLoadPhotos: () => Action,
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
