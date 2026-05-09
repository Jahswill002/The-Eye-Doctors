module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B2545',
        teal: '#1D6A72',
        amber: '#D4870B',
        'surface-white': '#FFFFFF',
        'surface-off-white': '#F8F9FA',
        'light-gray': '#E8ECF0',
        'body-text': '#2D3748',
        'subtle-text': '#6B7280',
      },
      fontFamily: {
        serif: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '8px': '0.5rem',
        '16px': '1rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '48px': '3rem',
        '64px': '4rem',
        '96px': '6rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'btn': '6px',
        'card': '12px',
        'input': '8px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'scroll-reveal': 'scrollReveal 0.8s ease-out',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scrollReveal: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
