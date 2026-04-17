// Vercel Serverless Handler for Health Check
export default function handler(req, res) {
  res.status(200).json({ 
    status: 'OK', 
    message: 'The Eye Doctors API is running',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
}
