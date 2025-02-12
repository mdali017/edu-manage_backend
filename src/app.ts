import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.routes';
const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

// const a = 10;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
