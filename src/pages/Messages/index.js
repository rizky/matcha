// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'src/components/Layout/Basic';
import Threads from 'src/components/Threads';
import { onLoadThreads, onSelectThread, type Action } from 'src/pages/Messages/actions';
import { selectThreads } from 'src/pages/Messages/selector';
import { COLORS, MARGINS } from 'src/constants/design';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    margin: MARGINS.TINY,
    width: '97%',
  },
});

type Props = {
  threads: Array<ThreadType>,
  onSelectThread: (string) => Action,
  onLoadThreads: () => Action,
};

class Messages extends Component<Props> {
  componentWillMount() {
    this.props.onLoadThreads();
  }

  render() {
    return (
      <Layout>
        <ScrollView style={styles.mainPanel}>
          <Threads
            threads={this.props.threads}
            onSelectThread={(thread) => { this.props.onSelectThread(thread); Actions.push('conversation'); }}
          />
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  threads: selectThreads(state),
});

const mapDispatchToProps = {
  onLoadThreads,
  onSelectThread,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
