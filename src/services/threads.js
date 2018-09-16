// @flow
import { api } from 'src/services/config';
import axios from 'axios';

// get thread/{userId} -> threads
export async function get(userId: string): Promise<Array<ThreadType>> {
  const response = await axios.get(api.concat('threads/').concat(userId));
  const threads = response.data;
  return threads;
}
