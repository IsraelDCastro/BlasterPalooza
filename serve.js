const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
app.use(cors())
app.get('/', function (req, res) {
	// res.send({data:{
	// 	name: 'hola',
	// 	lastname: 'de castro',
	// 	pNumber: "849-341-3482"
	// }})
	res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(port, function () {
	console.log('It Works...')
})
