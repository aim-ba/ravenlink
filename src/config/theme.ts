/**
 * Theme Configuration
 *
 * Centralized configuration for colors, branding, and styling.
 * Modify this file to quickly update the entire application's theme.
 */

export const theme = {
  // Brand Colors - Raven (logo-derived) palette
  colors: {
    // Gold from mark (primary action)
    primary: {
      main: '#F8B818',      // Raven Gold
      hover: '#E0A615',     // Darker gold for hover
      light: '#FFD56A',     // Soft highlight
      dark: '#B98210',      // Deeper gold
    },

    // Forest green from mark
    secondary: {
      main: '#607828',      // Forest Green
      hover: '#4F631F',     // Darker for hover
      light: '#7F9A3A',     // Lighter green
    },

    // Deep blue from mark (links / info accents)
    accent: {
      main: '#184878',      // Deep Blue
      hover: '#12365A',     // Darker blue for hover
      light: '#2C6AA7',     // Lighter blue
    },

    // Orange from mark (secondary accent / highlights)
    tertiary: {
      main: '#F09800',      // Raven Orange
      hover: '#C67C00',     // Darker orange for hover
      light: '#FFB13B',     // Lighter orange
    },

    // Light + Dark surfaces (ShadCN-friendly)
    background: {
      main: '#F8F0D8',      // Warm cream (light background)
      card: '#FFFFFF',      // Card surface
      alt: '#F3EAD0',       // Subtle alt surface
      dark: '#001010',      // Ink (dark background)
      darkCard: '#071B1B',  // Slightly lifted card on dark
      darkAlt: '#0B2222',   // Alt surface on dark
    },

    // Text colors tuned for both modes
    text: {
      primary: '#0B1A1A',   // Ink text on light
      secondary: '#3D4A45', // Muted ink
      light: '#6B736F',     // Light muted
      inverse: '#F8F0D8',   // Cream text on dark
      inverseMuted: '#CFC7B0',
    },

    // Borders tuned for both modes
    border: {
      main: '#E6DCC0',      // Light border
      light: '#F3EAD0',     // Lighter divider
      dark: '#163232',      // Dark border
      darkLight: '#0F2A2A', // Dark divider
    },

    success: '#10B981',     // Green-500
    error: '#EF4444',       // Red-500
    warning: '#F59E0B',     // Amber-500
  },

  // Typography
  fonts: {
    heading: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },

  // Branding
  branding: {
    appName: 'Raven',
    appFullName: 'Indigenous Opportunities & Contracting System',
    tagline: 'Building Relationships. Creating Opportunities.',
    description:
      'Facilitating meaningful Indigenous engagement and transparent ESG reporting for major infrastructure projects',
    organization: 'AiM',
    contact: 'lisah.peterson@aimlandandenviro.ca',
  },

  // Navigation Items - Easy to add/remove pages
  navigation: {
    main: [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'jobs', label: 'Opportunities', path: '/jobs' },
      { id: 'about', label: 'About Raven', path: '/about' },
    ],
  },

  // Layout
  layout: {
    maxWidth: '1280px',
    containerPadding: '1rem',
    navHeight: '64px',
  },
};

// Helper function to apply theme colors as Tailwind classes
// Use this when you need dynamic class names based on theme
export const getThemeClasses = () => ({
  // Buttons
  primaryButton: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  secondaryButton: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground',
  accentButton: 'bg-accent hover:bg-accent/90 text-accent-foreground',
  outlineButton: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',

  // Text
  headingText: 'text-foreground',
  bodyText: 'text-muted-foreground',
  mutedText: 'text-muted-foreground',
  primaryText: 'text-primary',
  secondaryText: 'text-secondary',

  // Backgrounds
  bgMain: 'bg-background',
  bgCard: 'bg-card',
  bgPrimary: 'bg-primary',
  bgSecondary: 'bg-secondary',

  // Borders
  border: 'border-border',
  borderPrimary: 'border-primary',
});

export default theme;
