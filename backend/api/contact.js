// Vercel Serverless Handler for Contact Submissions
export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          required: ['name', 'email', 'message']
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Message length validation
      if (message.length < 10 || message.length > 1000) {
        return res.status(400).json({ error: 'Message must be between 10 and 1000 characters' });
      }

      // TODO: Save to database
      // TODO: Send email notification to clinic
      // TODO: Send auto-reply to user
      
      console.log('Contact submission:', { 
        name, 
        email, 
        phone,
        subject,
        message: message.substring(0, 100) + '...',
        submittedAt: new Date().toISOString()
      });
      
      return res.status(201).json({ 
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.',
        ticketId: `TKT-${Date.now()}`,
        data: { name, email }
      });
    } catch (error) {
      console.error('Contact handler error:', error);
      return res.status(500).json({ error: 'Failed to process contact message' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
