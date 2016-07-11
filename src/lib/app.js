import express from 'express';
import morgan from 'morgan';
import cors from './cors';
const app = express();
export default app;
import screenings from '../routes/screenings';

app.use(morgan('dev'));
app.use(cors('*'));
app.use('/api/screenings', screenings);

// eslint-disable-next-line  no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.code || 500).json({ error: err.error || 'Server error', msg: err.msg });
});
