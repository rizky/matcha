import express from 'express'
import cors from 'cors'
import routes from './routes/index'
import bodyParser from 'body-parser'

var app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use('/', routes)

app.use( (req, res, next) => {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})