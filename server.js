const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extented: false }));

app.get('/', (req, res) => res.json({ msg: 'welcome to contact keeper API' }));

// define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
