import express from 'express';
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.listen(process.env.PORT || 4000);