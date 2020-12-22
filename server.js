const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 80 : 4000;
console.log('using port >>', PORT);


app.use(express.static('frontend'));

app.all('*', (_, res) => {
    return res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// app.listen(PORT, '0.0.0.0', () => console.log('Server started'));
app.listen(PORT, () => console.log('Server started'));
