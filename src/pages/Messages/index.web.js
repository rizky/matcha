import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Threads from 'app/components/Threads';
import { onLoadThreads } from 'app/pages/Messages/actions';
import { selectThreads } from 'app/pages/Messages/selector';
import type { Thread } from 'app/types/Thread';
import { COLORS, MARGINS } from 'app/constants/design';

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    marginVertical: MARGINS.TINY,
  },
  sidePanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
    width: 300,
  },
});

type Props = {
  threads: Array<Thread>,
};

class Messages extends Component<Props> {
  componentWillMount() {
    this.props.onLoadThreads();
  }

  render() {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <ScrollView style={styles.sidePanel}>
          <Threads threads={this.props.threads} />
        </ScrollView>
        <ScrollView style={styles.mainPanel} />
        <ScrollView style={styles.sidePanel} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  threads: selectThreads(state),
});

const mapDispatchToProps = {
  onLoadThreads,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
export { Messages };
