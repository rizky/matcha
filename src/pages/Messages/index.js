import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Threads from 'app/components/Threads';
import { onLoadThreads, onSelectThread } from 'app/pages/Messages/actions';
import { selectThreads } from 'app/pages/Messages/selector';
import type { Thread } from 'app/types/Thread';
import { COLORS, MARGINS } from 'app/constants/design';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    margin: MARGINS.TINY,
  },
});

type Props = {
  threads: Array<Thread>,
  onSelectThread: (string) => {},
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
export { Messages };
