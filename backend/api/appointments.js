// Vercel Serverless Handler for Appointment Submissions
export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { fullName, email, phone, dateOfBirth, service, preferredLocation, preferredDate, preferredTime, message } = req.body;
      
      // Validate required fields
      if (!fullName || !email || !phone || !preferredDate || !preferredTime) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          required: ['fullName', 'email', 'phone', 'preferredDate', 'preferredTime']
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // TODO: Save to database
      // TODO: Send confirmation email
      // TODO: Add to calendar
      
      console.log('Appointment request:', { 
        fullName, 
        email, 
        phone, 
        service, 
        preferredLocation,
        preferredDate, 
        preferredTime,
        submittedAt: new Date().toISOString()
      });
      
      return res.status(201).json({ 
        success: true,
        message: 'Appointment request received. We will contact you within 24 hours to confirm.',
        appointmentId: `APT-${Date.now()}`,
        data: { 
          fullName, 
          email, 
          preferredDate, 
          preferredTime,
          location: preferredLocation
        }
      });
    } catch (error) {
      console.error('Appointment handler error:', error);
      return res.status(500).json({ error: 'Failed to process appointment request' });
    }
  } else if (req.method === 'GET') {
    // TODO: Fetch appointments from database (with authentication)
    return res.status(200).json({ appointments: [] });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
