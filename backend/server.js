import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'The Eye Doctors API is running' });
});

// Appointment Routes (to be implemented)
app.post('/api/appointments', (req, res) => {
  // TODO: Save appointment to database
  res.json({ message: 'Appointment received. We will contact you shortly.' });
});

app.get('/api/appointments', (req, res) => {
  // TODO: Fetch appointments from database
  res.json({ appointments: [] });
});

// Contact Routes (to be implemented)
app.post('/api/contact', (req, res) => {
  // TODO: Save contact message to database
  res.json({ message: 'Message received. We will get back to you soon.' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`The Eye Doctors API running on port ${PORT}`);
});
