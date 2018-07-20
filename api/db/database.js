import mysql from 'mysql'

var connection = mysql.createPool({
	host:'db',
	user:'root',
	password:'root',
	database:'matcha'
})

export default connection