import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import swaggerSpec from './swagger.js';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';

const app: Application = express();

app.use(express.json());
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
