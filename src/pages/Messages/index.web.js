import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Threads from 'app/components/Threads';
import MessageComponent from 'app/components/Messages';
import { onLoadThreads, onSelectThread } from 'app/pages/Messages/actions';
import { selectThreads, selectMessages, selectThread } from 'app/pages/Messages/selector';
import type { Thread } from 'app/types/Thread';
import type { Message } from 'app/types/Message';
import { COLORS, MARGINS } from 'app/constants/design';
import { User } from 'app/components/Users';

const styles = StyleSheet.create({
  leftPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
    width: 325,
  },
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    marginVertical: MARGINS.TINY,
    minWidth: 325,
  },
  rightPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 0,
    margin: MARGINS.TINY,
  },
});

type Props = {
  threads: Array<Thread>,
  messages: Array<Message>,
  onSelectThread: (string) => {},
  selectedThread: Thread,
};

class Messages extends Component<Props> {
  componentWillMount() {
    this.props.onLoadThreads();
  }

  render() {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <ScrollView style={styles.leftPanel}>
          <Threads threads={this.props.threads} onSelectThread={this.props.onSelectThread} />
        </ScrollView>
        <ScrollView style={styles.mainPanel}>
          <MessageComponent messages={this.props.messages} />
        </ScrollView>
        { this.props.selectedThread &&
          <ScrollView style={styles.rightPanel}>
            <User user={this.props.selectedThread.user2} />
          </ScrollView>
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: selectMessages(state),
  selectedThread: selectThread(state),
  threads: selectThreads(state),
});

const mapDispatchToProps = {
  onLoadThreads,
  onSelectThread,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
export { Messages };
