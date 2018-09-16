import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'src/components/Layout/Basic';
import Messages from 'src/components/Messages';
import { selectMessages, selectThread } from 'src/pages/Messages/selector';
import type { MessageType } from 'src/types/Message';
import { COLORS, MARGINS } from 'src/constants/design';
import type { ThreadType } from 'src/types/Thread';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    margin: MARGINS.TINY,
    width: '97%',
  },
});

type Props = {
  messages: Array<MessageType>,
  selectedThread: ThreadType,
};

const Conversation = (props: Props) => (
  <Layout
    noTabs
    hasBack
    title={props.selectedThread ? props.selectedThread.user2.name : undefined}
    headerActions={[
      <Icon name="ellipsis-h" key="ellipsis-h" size={20} color={COLORS.BLUE_DARKER} />,
    ]}
  >
    <ScrollView style={styles.mainPanel}>
      <Messages messages={props.messages} />
    </ScrollView>
  </Layout>
);

const mapStateToProps = (state) => ({
  messages: selectMessages(state),
  selectedThread: selectThread(state),
});

export default connect(mapStateToProps)(Conversation);
