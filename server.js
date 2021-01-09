const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 80 : 4000;


app.use(express.static('client/build'));

app.all('*', (_, res) => {
    return res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// app.listen(PORT, '0.0.0.0', () => console.log('Server started'));
app.listen(PORT, () => console.log('Server started'));
