/*  eslint-disable no-restricted-imports */

import ORM from './ORM';
import User from './User';
import Thread from './Thread';

export default class Message extends ORM {
  static async populate(message) {
    const result = message;
    result.from = await User.findOne(message.from);
    result.thread = await Thread.findOne(message.thread);
    result.thread.user1 = await User.findOne(message.thread.user1);
    result.thread.user2 = await User.findOne(message.thread.user2);
    return result;
  }

  static find(params, order, callback) {
    Message.findAll(params, order, (err, messages) => {
      if (err) { callback(err, messages); }
      const promises = messages.map(async (message) => this.populate(message));
      Promise.all(promises).then((results) => callback(err, results));
    });
  }
}
