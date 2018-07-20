import express from 'express'
import User from '../models/User'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		User.findOne(req.params.id, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		User.findAll(null, null, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

router.post('/', (req, res, next) =>
{
	User.addUser(req.body, (err, count) =>
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.post('/:id', (req, res, next) =>
{
	User.deleteAll(req.body, (err, count) =>
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.delete('/:id', (req, res, next) =>
{
	User.deleteUser(req.params.id, (err, count) =>
	{
		(err)
		? res.json(err)
		: res.json(count)
	})
})

router.put('/:id', (req, res, next) =>
{
	User.updateUser(req.params.id, req.body, (err, rows) =>
	{
		(err)
		? res.json(err)
		: res.json(rows)
	})
})

export default router