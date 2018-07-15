import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { onLoadPhotos } from 'app/components/Photos/actions';
import { selectPhotos } from 'app/components/Photos/selector';
import { injectIntl } from 'react-intl';

class Photos extends Component {
  componentWillMount() {
    this.props.onLoadPhotos();
  }

  render() {
    return (
      <View>
        {
          (this.props.photos)
            ? this.props.photos.map((photo) => (<Text key={photo.id}>{photo.url}</Text>))
            : null
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: selectPhotos(state),
});

const mapDispatchToProps = {
  onLoadPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Photos));
export { Photos };
