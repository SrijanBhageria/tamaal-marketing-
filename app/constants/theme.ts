export const theme = {
  colors: {
    // Primary Green Palette
    primary: "#2F6F4F",           // Deep forest green - main brand
    primarySoft: "#4E8A68",       // Lighter sage green
    primaryDark: "#1A4D35",       // Rich dark green
    primaryMuted: "#6B9B7E",      // Muted green for subtle accents
    
    // Warm Accent Colors - Gold
    secondary: "#C9A227",         // Rich harvest gold
    secondarySoft: "#E8D48A",     // Soft wheat gold
    secondaryDark: "#9A7B1C",     // Deep amber
    
    // Warm Accent Colors - Terracotta/Copper
    warm: "#B87333",              // Copper/terracotta
    warmSoft: "#D4A574",          // Soft clay
    warmMuted: "#C49A6C",         // Muted sand
    
    // Cream & Ivory Tones
    cream: "#F5F1E8",             // Warm cream
    ivory: "#FFFEF9",             // Soft ivory
    sand: "#E8E2D5",              // Natural sand
    
    // Background & Surface
    background: "#FAFBF8",        // Warm off-white
    backgroundAlt: "#F5F7F4",     // Subtle green tint
    surface: "#FFFFFF",
    surfaceElevated: "#FEFEFE",
    
    // Soft Accent Greens
    accent: "#A3C9A8",            // Soft pastel green
    accentSoft: "#D4E8D6",        // Very light mint
    accentMuted: "#B8D4BC",       // Muted sage
    
    // Text Colors
    textPrimary: "#1A1F1C",       // Near black with green undertone
    textSecondary: "#2D3830",     // Dark green-gray
    textMuted: "#5A6B5F",         // Muted green-gray
    textLight: "#8A9B8E",         // Light text
    
    // Border Colors
    border: "#D8DDD9",            // Soft green-gray border
    borderLight: "#E8EBE9",       // Very light border
    borderWarm: "#E5DFD3",        // Warm border
    
    // Decorative
    highlight: "#F0EBE0",         // Warm highlight
  },
} as const;

export type ThemeColors = typeof theme.colors;
