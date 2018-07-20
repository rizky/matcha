import ORM from './ORM'
import User from './User'
import Thread from './Thread';

export default class Message extends ORM {
	static async populate(message)
	{
		if (message.from == 0)
			message.from = { id: 0, name: 'Matcha', username: 'Matcha'}
		else
			message.from = await User.findOne(message.from)
		message.thread = await Thread.findOne(message.thread)
		message.thread.user1 = await User.findOne(message.thread.user1)
		message.thread.user2 = await User.findOne(message.thread.user2)
	}

	static find(params, order, callback)
	{
		Message.findAll(params, order, (err, messages) =>
		{	
			if (err)
				callback(err, messages)
			var promises = messages.map(async (message) => {
				return await this.populate(message)
			})
			Promise.all(promises).then(results => {
				callback(err, messages)
			})
		})
	}
}