import bodyParser from 'body-parser';
import express from 'express';

import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
