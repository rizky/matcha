import express from 'express'
import Thread from '../models/Thread'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Thread.find({ user1: req.params.id}, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Thread.findAll(null, null, (err, rows) => {
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router