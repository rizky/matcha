import express from 'express'
import Photo from '../models/Photo'

var router = express.Router()

router.get('/:id?', (req, res, next) =>
{
	if (req.params.id)
		Photo.get(req.params.id, (err, rows) =>
		{
			(err)
			? res.json(err)
			: res.json(rows)
		})
	else
		Photo.find(null, (err, rows) => {
			(err)
			? res.json(err)
			: res.json(rows)
		})
})

export default router