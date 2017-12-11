const express = require('express');
const methodOverride = require('method-override');
const http = require('http');
const path = require('path');

const app = express();
app
	.use(express.static(path.join(__dirname, 'public')))
	.use((req, res) => {
		res.sendStatus(404);
	})
	.use(methodOverride())
	.use((err, req, res, next) => {
		// Invalid input
		console.log(err);
		res.sendStatus(400);
		next();
	});

http.createServer(app).listen(80);
