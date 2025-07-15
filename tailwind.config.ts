// ✅ Add this import at the top
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				playfair: ['"Playfair Display"', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', filter: 'blur(0px)' },
          '25%': { transform: 'translateY(-10px) rotate(90deg) scale(1.1)', filter: 'blur(0.5px)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg) scale(1.2)', filter: 'blur(1px)' },
          '75%': { transform: 'translateY(-10px) rotate(270deg) scale(1.1)', filter: 'blur(0.5px)' }
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translateX(30px) translateY(-50px) scale(1.2)', opacity: '0.7' },
          '50%': { transform: 'translateX(-20px) translateY(-80px) scale(0.8)', opacity: '1' },
          '75%': { transform: 'translateX(40px) translateY(-30px) scale(1.1)', opacity: '0.5' }
        },
        'gradient-wave': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)', opacity: '0.3' },
          '33%': { transform: 'translateX(-50%) translateY(-50%) rotate(120deg)', opacity: '0.6' },
          '66%': { transform: 'translateX(-50%) translateY(-50%) rotate(240deg)', opacity: '0.4' }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '25%': { backgroundPosition: '50% 0%', filter: 'hue-rotate(90deg)' },
          '50%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(180deg)' },
          '75%': { backgroundPosition: '50% 100%', filter: 'hue-rotate(270deg)' },
          '100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(360deg)' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(40px) scale(0.95)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' }
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(60px) scale(0.9)', filter: 'blur(5px)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' }
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-60px) rotate(-5deg)', filter: 'blur(5px)' },
          to: { opacity: '1', transform: 'translateX(0) rotate(0deg)', filter: 'blur(0px)' }
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(60px) rotate(5deg)', filter: 'blur(5px)' },
          to: { opacity: '1', transform: 'translateX(0) rotate(0deg)', filter: 'blur(0px)' }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.1)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(59, 130, 246, 0.2)',
            transform: 'scale(1.02)'
          }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3) rotate(-10deg)' },
          '50%': { opacity: '1', transform: 'scale(1.1) rotate(5deg)' },
          '70%': { transform: 'scale(0.9) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        },
        spiral: {
          '0%': { transform: 'rotate(0deg) scale(1)', filter: 'hue-rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) scale(1.1)', filter: 'hue-rotate(360deg)' }
        },
        morph: {
          '0%, 100%': { borderRadius: '50% 30% 70% 40%', transform: 'rotate(0deg)' },
          '25%': { borderRadius: '30% 60% 70% 40%', transform: 'rotate(90deg)' },
          '50%': { borderRadius: '50% 60% 30% 60%', transform: 'rotate(180deg)' },
          '75%': { borderRadius: '30% 30% 50% 60%', transform: 'rotate(270deg)' }
        },
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)'
          },
          '50%': {
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 8s ease-in-out infinite',
        'float-particle': 'float-particle 20s linear infinite',
        'gradient-wave': 'gradient-wave 15s ease-in-out infinite',
        gradient: 'gradient 6s ease infinite',
        'fade-in': 'fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        spiral: 'spiral 10s linear infinite',
        morph: 'morph 8s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
