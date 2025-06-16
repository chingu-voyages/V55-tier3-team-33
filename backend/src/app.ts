import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import swaggerSpec from './swagger.js';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';

const FRONTEND_URI = process.env.FRONTEND_URI;
if (!FRONTEND_URI) {
  throw new Error('FRONTEND_URI not set. Please check your env vars');
}

const app: Application = express();

app.use(express.json());

// logger middleware
app.use(function logRequests(req, _, next) {
  console.info(`${req.method} initiated on ${req.path}`);
  next();
});

// CORS middleware
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONTEND_URI);
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
