import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pause from 'connect-pause';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Simulate delay
app.use(pause(1000));
app.use(cors());
app.use('/', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

