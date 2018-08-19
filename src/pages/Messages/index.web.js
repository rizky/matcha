import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'src/components/Layout/Basic';
import Threads from 'src/components/Threads';
import MessagesComponent from 'src/components/Messages';
import { onLoadThreads, onSelectThread } from 'src/pages/Messages/actions';
import { selectThreads, selectMessages, selectThread } from 'src/pages/Messages/selector';
import type { ThreadType } from 'src/types/Thread';
import type { MessageType } from 'src/types/Message';
import { COLORS, MARGINS } from 'src/constants/design';
import ProfileComponent from 'src/components/Users/Profile';
import type { PhotoType } from 'src/types/Photo';
import { selectPhotosUser } from 'src/pages/Feed/selector';

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
  threads: Array<ThreadType>,
  messages: Array<MessageType>,
  onSelectThread: (string) => {},
  selectedThread: ThreadType,
  photosUser: Array<PhotoType>,
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
          <MessagesComponent messages={this.props.messages} />
        </ScrollView>
        { this.props.selectedThread &&
          <ProfileComponent user={this.props.selectedThread.user2} photos={this.props.photosUser} />
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: selectMessages(state),
  photosUser: selectPhotosUser(state),
  selectedThread: selectThread(state),
  threads: selectThreads(state),
});

const mapDispatchToProps = {
  onLoadThreads,
  onSelectThread,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
