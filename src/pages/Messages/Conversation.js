import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import Messages from 'app/components/Messages';
import { selectMessages, selectThread } from 'app/pages/Messages/selector';
import type { Message } from 'app/types/Message';
import { COLORS, MARGINS } from 'app/constants/design';
import type { Thread } from 'app/types/Thread';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    margin: MARGINS.TINY,
  },
});

type Props = {
  messages: Array<Message>,
  selectedThread: Thread,
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
export { Conversation };
