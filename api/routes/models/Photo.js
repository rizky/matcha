import ORM from './ORM'
import User from './User'
import Message from './Message'

export default class Photo extends ORM {
	static async populate(photo)
	{
		photo['like_logo'] = 'far'
		photo.user = await User.findOne(photo.user)
	}

	static find(params, callback)
	{
		Photo.findAll(params, null, (err, photos) =>
		{	
			let promises = photos.map(async (photo) => {
				photo.messages = await Message.findAll({photo: photo.id})
				photo.messages.map(async (message) => {
					message.user = await User.findOne(message.user)
					return message
				})
				return await this.populate(photo)
			})
			Promise.all(promises).then(results => {
				callback(err, photos)
			})
		})
	}

	static get(id, callback)
	{
		Photo.findOne(id, (err, photos) =>
		{	
			let promises = photos.map(async (photo) => {
				return await this.populate(photo)
			})
			Promise.all(promises).then(results => {
				callback(err, photos)
			})
		})
	}
}