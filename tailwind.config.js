module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_courses/**/*.{html,md}',
    './_data/**/*.{yml,json}',
    './*.{html,md}',
    './index.md',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              '@apply text-4xl font-bold mb-6': {},
            },
            h2: {
              '@apply text-3xl font-bold mb-4': {},
            },
            h3: {
              '@apply text-2xl font-bold mb-4': {},
            },
            h4: {
              '@apply text-xl font-bold mb-3': {},
            },
          },
        },
      },
      spacing: {
      '0.5': '0.125rem',
      '1.5': '0.375rem',
      '2.5': '0.625rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '4.5': '1.125rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '6.5': '1.625rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '14': '3.5rem',  
      '16': '4rem',  
      '18': '4.5rem',
      '20': '5rem',
      '24': '6rem',   
      '26': '6.5rem',
      '28': '7rem',
      '32': '8rem',   
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'bg-green-100', 'text-green-800', // Active status
    'bg-gray-100', 'text-gray-600',   // Past status
    'bg-blue-100', 'text-blue-800',   // Python
    'bg-orange-100', 'text-orange-800', // Java
    'bg-purple-100', 'text-purple-800', // LaTeX
    'bg-red-100', 'text-red-800',     // PyTorch
    'bg-yellow-100', 'text-yellow-800', // TensorFlow
    'bg-pink-100', 'text-pink-800',   // Julia
    'bg-indigo-100', 'text-indigo-800', // R
    'bg-teal-100', 'text-teal-800',   // C++
    'bg-gray-100', 'text-gray-800',   // Default tech tag
    'bg-red-100', 'text-red-800',     // Default status
    // Spacing classes
    'mb-2', 'mb-4', 'mb-6', 'mb-8', 'mb-12',
    'mt-2', 'mt-4', 'mt-6', 'mt-8', 'mt-12',
  ],
};
