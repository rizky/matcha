import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { ThreadType } from 'app/types/Thread';
import { MARGINS, COLORS } from 'app/constants/design';
import moment from 'moment';

const styles = StyleSheet.create({
  threadContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    padding: MARGINS.SMALL,
  },
  threadsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

type ThreadProps = {
  thread: ThreadType,
};

const Thread = (props: ThreadProps) => (
  <View style={styles.threadContainer}>
    <Text>{props.thread.user2.name}</Text>
    <Text>{props.thread.lastMessage.message}</Text>
    <Text>{moment(props.thread.createdAt).fromNow()}</Text>
  </View>
);

type ThreadsProps = {
  threads: Array<ThreadType>,
};

const Threads = (props: ThreadsProps) => (
  <View style={styles.threadsContainer}>
    {
      props.threads.map((thread) =>
        (
          !thread.lastMessage.match.data[0]
            ? <Thread key={thread.id} thread={thread} />
            : null
        ))
    }
  </View>
);

export default Threads;
export { Threads };
