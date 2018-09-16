// @flow
import { api } from 'src/services/config';
import axios from 'axios';

// get messages/thread/{threadId} -> messages
export async function get(threadId: string): Promise<Array<MessageType>> {
  const response = await axios.get(api.concat('messages/thread/').concat(threadId));
  const messages = response.data;
  return messages;
}
