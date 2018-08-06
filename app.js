const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.static('./'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/push-worker.js', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'push-worker.js'));
});

app.listen(3000, () => {
	console.log('Notifications should be working');
});
