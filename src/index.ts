import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './route/userRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
