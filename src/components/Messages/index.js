import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { MessageType } from 'app/types/Message';
import { MARGINS, COLORS } from 'app/constants/design';
import moment from 'moment';

const styles = StyleSheet.create({
  messageContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY,
    flexDirection: 'row',
    padding: MARGINS.SMALL,
  },
  messageHeader: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: MARGINS.TINY,
  },
  messageProfile: {
    backgroundColor: COLORS.GREY_DARK,
    borderRadius: 20,
    height: 40,
    marginRight: MARGINS.SMALL,
    width: 40,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesMatchContainer: {
    flexDirection: 'row',
  },
});

type MessageProps = {
  message: MessageType,
};

const Message = (props: MessageProps) => (
  <View style={styles.messageContainer}>
    <View style={{ flex: 1 }}>
      <View style={styles.messageHeader}>
        <Text>{props.message.from.username}</Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>
          {moment(props.message.createdAt).fromNow()}
        </Text>
      </View>
      <Text>{props.message.message}</Text>
    </View>
  </View>
);

type MessagesProps = {
  messages: Array<MessageType>,
};

const Messages = (props: MessagesProps) => (
  <View style={styles.messagesContainer}>
    {props.messages.map((message) =>
      (
        <Message key={message.id} message={message} />
      ))
    }
  </View>
);

export default Messages;
export { Messages, Message };
