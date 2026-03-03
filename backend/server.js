import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import applicationRoutes from './routes/applications.js';

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' Connected to Cape Town Cluster!'))
  .catch(err => console.error(' MongoDB Connection Error:', err));


app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));