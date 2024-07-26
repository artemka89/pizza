/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animate'),
    plugin(({ addVariant }) => {
      // Hover media queries
      addVariant('has-hover', '@media (hover: hover)');
      addVariant('no-hover', '@media (hover: none)');
      // Applied on hover if supported, never applied otherwise
      addVariant('hover-never', '@media (hover: hover) { &:hover }');
      addVariant(
        'group-hover-never',
        '@media (hover: hover) { :merge(.group):hover & }',
      );
      addVariant(
        'peer-hover-never',
        '@media (hover: hover) { :merge(.peer):hover & }',
      );
      // Applied on hover if supported, always applied otherwise
      addVariant('hover-always', [
        '@media (hover: hover) { &:hover }',
        '@media (hover: none)',
      ]);
      addVariant('group-hover-always', [
        '@media (hover: hover) { :merge(.group):hover & }',
        '@media (hover: none)',
      ]);
      addVariant('peer-hover-always', [
        '@media (hover: hover) { :merge(.peer):hover & }',
        '@media (hover: none)',
      ]);
    }),
  ],
};
