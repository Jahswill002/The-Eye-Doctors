import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://the-eye-doctors.vercel.app',
    process.env.FRONTEND_URL || '*'
  ],
  credentials: true
}));
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'The Eye Doctors API is running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Appointment Routes (to be implemented)
app.post('/api/appointments', (req, res) => {
  try {
    // TODO: Validate with Joi
    // TODO: Save appointment to database
    const { fullName, email, phone, service, preferredDate, preferredTime } = req.body;
    
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Temporary: Log appointment
    console.log('Appointment request:', { fullName, email, phone, service, preferredDate, preferredTime });
    
    res.status(201).json({ 
      success: true,
      message: 'Appointment received. We will contact you shortly.',
      data: { fullName, email }
    });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ error: 'Failed to process appointment' });
  }
});

app.get('/api/appointments', (req, res) => {
  // TODO: Fetch appointments from database with authentication
  res.json({ appointments: [] });
});

// Contact Routes (to be implemented)
app.post('/api/contact', (req, res) => {
  try {
    // TODO: Validate contact message
    // TODO: Save to database
    // TODO: Send email notification
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Contact message:', { name, email, message });
    
    res.status(201).json({ 
      success: true,
      message: 'Message received. We will get back to you soon.',
      data: { name, email }
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to process contact' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server (only in development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`The Eye Doctors API running on port ${PORT}`);
  });
}

export default app;
