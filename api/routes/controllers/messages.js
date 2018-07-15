import express from 'express'
import Message from '../models/Message'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Message.find({id: req.params.id}, null, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Message.findAll(null, null, (err, rows) => {
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

router.get('/thread/:thread', (req, res, next) =>
{
	Message.find({thread: req.params.thread}, null, (err, rows) =>
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

router.get('/to/:to', (req, res, next) =>
{
	Message.find({to: req.params.to}, ['createdAt', 'DESC'], (err, rows) =>
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

router.post('/', function(req, res) {
	if (req.body.id === undefined)
	{
		Message.insert(req.body, function(err, count)
		{
			if(err)
				res.json(err);
			else
				res.json(count);
		});
	}
	else
	{
		Message.update(req.body, function(err, count)
		{
			if(err)
				res.json(err);
			else
				res.json(count);
		});
	}
});

export default router