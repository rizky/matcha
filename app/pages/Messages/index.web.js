import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Threads from 'app/components/Threads';
import MessagesComponent from 'app/components/Messages';
import { onLoadThreads, onSelectThread } from 'app/pages/Messages/actions';
import { selectThreads, selectMessages, selectThread } from 'app/pages/Messages/selector';
import type { ThreadType } from 'app/types/Thread';
import type { MessageType } from 'app/types/Message';
import { COLORS, MARGINS } from 'app/constants/design';
import ProfileComponent from 'app/components/Users/Profile';
import type { PhotoType } from 'app/types/Photo';
import { selectPhotosUser } from 'app/pages/Feed/selector';

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
