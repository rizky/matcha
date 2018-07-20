import express from 'express'
import * as Controllers from './controllers'

var router = express.Router()

// Load all controllers
Object.keys(Controllers).forEach((key) => {
	router.use(`/${key}`, Controllers[key])
})

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' })
})

export default router