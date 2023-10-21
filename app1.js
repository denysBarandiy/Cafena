const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Статичні файли, такі як HTML, CSS, та JavaScript будуть зберігатися у папці 'public'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index1.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/index2.html');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
