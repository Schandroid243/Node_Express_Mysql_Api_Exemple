const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.json({message: 'Hello from my Api'});
});


const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '192.168.88.164';

app.listen(PORT, IP, () => console.log(`Server is listening on: ${IP}:${PORT}`));
