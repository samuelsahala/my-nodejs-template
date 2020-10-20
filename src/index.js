const express = require('express');
const morgan = require('morgan'); // logger
const helmet = require('helmet'); // secure headers
const cors = require('cors');
const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

// -- Routes
app.get('/', (req, res) => {

});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
