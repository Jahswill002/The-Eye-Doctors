// API Configuration and utilities
export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:5000/api');

/**
 * Fetch wrapper with error handling
 */
export async function apiCall(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed: ${endpoint}`, error);
    throw error;
  }
}

/**
 * Submit appointment
 */
export async function submitAppointment(appointmentData) {
  return apiCall('/appointments', {
    method: 'POST',
    body: JSON.stringify(appointmentData),
  });
}

/**
 * Submit contact form
 */
export async function submitContact(contactData) {
  return apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
  });
}

/**
 * Health check
 */
export async function checkHealth() {
  return apiCall('/health', {
    method: 'GET',
  });
}
